<?php

namespace SarUser;

use SarUser\Model\Login;
use SarUser\Model\UserTable;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Zend\Form\View\Helper\FormRow;


class Module
{

    public function getName()
    {
        return 'sar-user';
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
                'SarUser\Model\UserTable' =>  function($sm) {
                        $tableGateway = $sm->get('UserTableGateway');
                        $model = new UserTable($tableGateway);
                        return $model;
                    },
                'UserTableGateway' => function ($sm) {
                        $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');

                        $resultSetPrototype = new ResultSet();
                        //$resultSetPrototype->setArrayObjectPrototype(new UserTable($dbAdapter));
                        return new TableGateway('user', $dbAdapter, null, $resultSetPrototype);
                    },
            ),
        );
    }
}
