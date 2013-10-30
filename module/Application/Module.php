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
use Zend\ModuleManager\Feature\ConfigProviderInterface;
use ZfcTwig\Twig\Extension\SarTwig as SarTwig;
use Zend\Session\SessionManager;
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
            ->get('Zend\Session\SessionManager');
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

        ),

    );
    }

}
