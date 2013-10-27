<?php
/**
 * Sven Anders Robbestad @ 2013
 *
 * @license   http://creativecommons.org/publicdomain/zero/1.0/legalcode CC0 1.0 Universal
 */


return array(
    'controllers' => array(
        'invokables' => array(
            'saruser' => 'SarUser\Controller\IndexController',
        ),
    ),


    'router' => array(
        'routes' => array(
            'saruser' => array(
                'type' => 'Literal',
                'priority' => 1000,
                'options' => array(
                    'route' => '/user',
                    'defaults' => array(
                        'controller' => 'saruser',
                        'action'     => 'index',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'login' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/login',
                            'defaults' => array(
                                'controller' => 'saruser',
                                'action'     => 'login',
                            ),
                        ),
                    ),
                    'authenticate' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/authenticate',
                            'defaults' => array(
                                'controller' => 'saruser',
                                'action'     => 'authenticate',
                            ),
                        ),
                    ),
                    'logout' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/logout',
                            'defaults' => array(
                                'controller' => 'saruser',
                                'action'     => 'logout',
                            ),
                        ),
                    ),
                    'register' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/register',
                            'defaults' => array(
                                '__NAMESPACE__' => 'SarUser\Controller',
                                'controller' => 'saruser',
                                'action'     => 'register',
                            ),
                        ),
                    ),
                    'changepassword' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/change-password',
                            'defaults' => array(
                                '__NAMESPACE__' => 'SarUser\Controller',
                                'controller' => 'saruser',
                                'action'     => 'changepassword',
                            ),
                        ),
                    ),
                    'changeemail' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/change-email',
                            'defaults' => array(
                                '__NAMESPACE__' => 'SarUser\Controller',
                                'controller' => 'saruser',
                                'action' => 'changeemail',
                            ),
                        ),
                    ),
                ),
            ),
        ),
    ),


    'view_manager' => array(
        'display_not_found_reason'  => false,
        'display_exceptions'        => false,
        'doctype'                   => 'HTML5',
        'not_found_exception'       => 'error',
        'not_found_template'        => 'error/404',
        'exception_template'        => 'error/index',
        'template_map' => array(
            'login/index/index'   => __DIR__ . '/../view/sar-user/index/index.twig',
            'nybruker'   => __DIR__ . '/../view/sar-user/index/nybruker.twig',
            'status'   => __DIR__ . '/../view/sar-user/index/index.twig',
            'login'   => __DIR__ . '/../view/sar-user/index/login.twig',
        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),
);
