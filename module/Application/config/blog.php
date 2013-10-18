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


    'controllers' => array(
        'invokables' => array(
            'Application\Controller\Index' => 'Application\Controller\IndexController',
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
                'application/index/index'   => __DIR__ . '/../view/application/index/index.twig',
                'application/index/resume'  => __DIR__ . '/../view/application/index/resume.twig',
                'application/index/contact'  => __DIR__ . '/../view/application/index/contact.twig',
                'application/index/blog'  => __DIR__ . '/../view/application/index/blog.twig',
                'application/index/error'   => __DIR__ . '/../view/error/index.twig',
                'layout/layout'             => __DIR__ . '/../view/layout/layout.twig',
                'error/index'               => __DIR__ . '/../view/error/index.twig',
                'error/404'                 => __DIR__ . '/../view/error/404.twig',
        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),
);
