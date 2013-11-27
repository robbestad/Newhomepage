<?php

namespace SarBlog;

use SarBlog\Model\BlogTable;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Zend\Form\View\Helper\FormRow;


class Module
{

    public function getName()
    {
        return 'sar-blog';
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
                'formRow' => function($sm) {
                        $helper = new FormRow();
                        $helper->setRenderErrors(false);
                        return $helper;
                    }
            ),
        );
    }

    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'SarBlog\Model\BlogTable' =>  function($sm) {
                        $tableGateway = $sm->get('BlogTableGateway');
                        $model = new BlogTable($tableGateway);
                        return $model;
                    },
                'BlogTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');

                        $resultSetPrototype = new ResultSet();
                        return new TableGateway('user', $dbAdapter, null, $resultSetPrototype);
                    },
            ),
        );
    }
}
