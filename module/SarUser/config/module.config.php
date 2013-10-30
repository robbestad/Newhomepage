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
            'saruser-route' => array(
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
                    'account' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/account',
                            'defaults' => array(
                                'controller' => 'saruser',
                                'action'     => 'account',
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
                                '__NAMESPACE__' => 'saruser',
                                'controller' => 'saruser',
                                'action'     => 'register',
                            ),
                        ),
                    ),
                    'changepassword' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/changepassword',
                            'defaults' => array(
                                '__NAMESPACE__' => 'saruser',
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
            'sar-user/index/index'   => __DIR__ . '/../view/sar-user/index/index.twig',
            'sar-user/index/account'   => __DIR__ . '/../view/sar-user/index/account.twig',
            'sar-user/index/login'   => __DIR__ . '/../view/sar-user/index/login.twig',
            'sar-user/index/logout'   => __DIR__ . '/../view/sar-user/index/logout.twig',
            'sar-user/index/register'   => __DIR__ . '/../view/sar-user/index/nybruker.twig',
            'sar-user/index/changepassword'   => __DIR__ . '/../view/sar-user/index/changepassword.twig',
            'register'   => __DIR__ . '/../view/sar-user/index/nybruker.twig',
            'error/index'               => __DIR__ . '/../view/sar-user/error/index.twig',
            'error/404'                 => __DIR__ . '/../view/sar-user/error/index.twig',
            'layout/layout'                 => __DIR__ . '/../../Application/view/layout/layout.twig',


        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),
);
