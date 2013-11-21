<?php
/**
 * SOLTV
 *
 *
 * @link      https://github.com/soldotno/soltv for the canonical source repository
 * @copyright Copyright (c) Scandinavia Online AS. (http://www.sol.no)
 * @license   Commercial License
 */

namespace Application;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
use Application\View\Helper\AbsoluteUrl;
use Application\View\Helper\GetPath;
use Application\View\Helper\GetRole;
use Application\View\Helper\Dump;
use Application\View\Helper\FormatMillisecondsToReadableTime;
use Application\View\Helper\AdHelper;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Application\Model\PageData;
use Zend\ModuleManager\Feature\ConfigProviderInterface;
use ZfcTwig\Twig\Extension\SarTwig as SarTwig;
use Zend\Session\Container;



class Module implements
    ConfigProviderInterface
{
    public function onBootstrap(MvcEvent $e)
    {

        $e->getApplication()->getServiceManager()->get('translator');
        $e->getApplication()->getServiceManager()->get('viewhelpermanager')->setFactory(
            'controllerName', function($sm) use ($e) {
            $viewHelper = new View\Helper\ControllerName($e->getRouteMatch());
            return $viewHelper;
            }
        );
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);

        $eventManager        = $e->getApplication()->getEventManager();
        $serviceManager      = $e->getApplication()->getServiceManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);

        $eventManager->attach('dispatch', array($this, 'loadConfiguration' ), 100);

        //handle the dispatch error (exception)
        $eventManager->attach(\Zend\Mvc\MvcEvent::EVENT_DISPATCH_ERROR, array($this, 'handleError'));
        //handle the view render error (exception)
        $eventManager->attach(\Zend\Mvc\MvcEvent::EVENT_RENDER_ERROR, array($this, 'handleError'));


        $this->bootstrapSession($e);
    }

    public function bootstrapSession($e)
    {
        $session = $e->getApplication()
            ->getServiceManager()
            ->get('Sessions');
        $session->start();

        $container = new Container('initialized');
        if (!isset($container->init)) {
            $session->regenerateId(true);
            $container->init = 1;
        }
    }

    public function loadConfiguration(MvcEvent $e)
    {
/*
        $controller = $e->getRouteMatch()->getParam('controller');
        if (0 !== strpos($controller, "Application", 0)) {
            //if not this module
            return;
        }
        $sm  = $e->getApplication()->getServiceManager();

        $sm->get('ViewManager')->getExceptionStrategy()->setExceptionTemplate('error/feil');
*/
    }

    public function handleError(MvcEvent $e)
    {
        $errormsg = '';
        $exception = $e->getParam('exception');
        if (method_exists($exception, 'getMessage')) {
            $errormsg = $exception->getMessage();
            error_log($errormsg);  // write the error to standard apache-log
        }

        $typeOfError = ($errormsg=='')? '404':'exception';

        // manipulate the view
        $vm = $e->getViewModel();
        $vm->setVariables(
            array(
                'type' => $typeOfError,
            )
        );
        $vm->setTemplate('error/index');
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }

    public function getViewHelperConfig()
    {
        return array(
            'factories' => array(
                // the array key here is the name you will call the view helper by in your view scripts
                'absoluteUrl' => function($sm) {
                    $locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager

                    return new AbsoluteUrl($locator->get('Request'));
                },
                'getPath' => function($sm) {
                    $locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager

                    return new GetPath();
                },
                'getRole' => function($sm){
                    $locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager

                    return new GetRole();
                },

                'dump' => function($sm){
                    return new Dump($sm->getServiceLocator()->get('Request'));
                },
                'FormatMillisecondsToReadableTime' =>function($sm){
                    $locator = $sm->getServiceLocator();

                    return new FormatMillisecondsToReadableTime();
                },

                'AdHelper' =>function($sm){
                    $locator = $sm->getServiceLocator();

                    return new AdHelper($locator->get('config'));

                }
            ),
        );
    }

    public function getServiceConfig()
    {
     return array(
        'factories' => array(
            'SarTwig' => function($sm) {
                        return new SarTwig($sm->get('ZfcTwigRenderer'));
            },
            'Application\Model\PageData' =>  function($sm) {
                    $tableGateway = $sm->get('PageDataGateway');
                    $model = new PageData($tableGateway);
                    return $model;
                },
            'PageDataGateway' => function ($sm) {
                    $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                    $resultSetPrototype = new ResultSet();
                    return new TableGateway('content', $dbAdapter, null, $resultSetPrototype);
                },

         'Sessions' => function ($sm) {
                 $config = $sm->get('config');
                 if (isset($config['session'])) {
                     $session = $config['session'];

                     $sessionConfig = null;
                     if (isset($session['config'])) {
                         $class = isset($session['config']['class'])  ? $session['config']['class'] : 'Zend\Session\Config\SessionConfig';
                         $options = isset($session['config']['options']) ? $session['config']['options'] : array();
                         $sessionConfig = new $class();
                         $sessionConfig->setOptions($options);
                     }

                     $sessionStorage = null;
                     if (isset($session['storage'])) {
                         $class = $session['storage'];
                         $sessionStorage = new $class();
                     }

                     $sessionSaveHandler = null;
                     if (isset($session['save_handler'])) {
                         // class should be fetched from service manager since it will require constructor arguments
                         $sessionSaveHandler = $sm->get($session['save_handler']);
                     }

                     $sessionManager = new \Zend\Session\SessionManager($sessionConfig, $sessionStorage, $sessionSaveHandler);

                     if (isset($session['validator'])) {
                         $chain = $sessionManager->getValidatorChain();
                         foreach ($session['validator'] as $validator) {
                             $validator = new $validator();
                             $chain->attach('session.validate', array($validator, 'isValid'));

                         }
                     }
                 } else {
                     $sessionManager = new SessionManager();
                 }
                 Container::setDefaultManager($sessionManager);
                 return $sessionManager;
             },
        ),
    );
    }

}
