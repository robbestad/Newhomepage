<?php
/**
 * Sven Anders Robbestad @ 2013
 *
 * @license   http://creativecommons.org/publicdomain/zero/1.0/legalcode CC0 1.0 Universal
 */


return array(
    'controllers' => array(
        'invokables' => array(
            'sarblog' => 'SarBlog\Controller\IndexController',
        ),
    ),


    'router' => array(
        'routes' => array(
            'sarblog-route' => array(
                'type' => 'Literal',
                'priority' => 1000,
                'options' => array(
                    'route' => '/blog',
                    'defaults' => array(
                        'controller' => 'sarblog',
                        'action'     => 'index',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'login' => array(
                        'type' => 'Literal',
                        'options' => array(
                            'route' => '/articles',
                            'defaults' => array(
                                'controller' => 'sarblog',
                                'action'     => 'login',
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
            'sar-blog/index/index'   => __DIR__ . '/../view/sar-blog/index/index.twig',


        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),
);
