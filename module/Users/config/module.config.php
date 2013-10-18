<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

return array(
    'service_manager' => array(
        'factories' => array(
            'translator' => 'Zend\I18n\Translator\TranslatorServiceFactory',

        ),
    ),
    'translator' => array(
        'locale' => 'nb_NO',
        'translation_file_patterns' => array(
            array(
                'type'     => 'gettext',
                'base_dir' => __DIR__ . '/../language',
                'pattern'  => '%s.mo',
            ),
        ),
    ),

    'router' => array(
        'routes' => array(

            'users' => array(
                'type' => 'literal',
                'options' => array(
                    'route' => '/users',
                    'defaults' => array(
                        '__NAMESPACE__' => 'Users\Controller',
                        'controller' => 'Index',
                        'action' => 'index',
                    ),
                ),
                'may_terminate' => true,
                'child_routes' => array(
                    'default' => array(
                        'type'    => 'Segment',
                        'options' => array(
                            'route'    =>
                            '/[:controller[/:action]]',
                            'constraints' => array(
                                'controller' =>
                                '[a-zA-Z][a-zA-Z0-9_-]*',
                                'action'     =>
                                '[a-zA-Z][a-zA-Z0-9_-]*',
                            ),
                            'defaults' => array(
                            ),
                        ),
                  ),
            ),
            ),
        ),
    ),





    'controllers' => array(
        'invokables' => array(
            'Users\Controller\Index' =>'Users\Controller\IndexController',
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
            'users/index/index'   => __DIR__ . '/../view/users/index/index.twig',
            'users/index/login'   => __DIR__ . '/../view/users/index/login.twig',
        ),
        'template_path_stack' => array(
            'users' => __DIR__ . '/../view',
        ),
    ),
);
