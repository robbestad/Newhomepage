<?php
/**
 * Global Metadata
 *
 */
return array(

    'router' => array(
        'routes' => array(
            'index' => array(
                'type' => 'Zend\Mvc\Router\Http\Literal',
                'options' => array(
                    'route' => '/',
                    'defaults' => array(
                        'controller' => 'Application\Controller\Index',
                        'action' => 'index',
                    ),
                ),
            ),

            'resume' => array(
                'type' => 'literal',
                'options' => array(
                    'route' => '/resume',
                    'defaults' => array(
                        'controller' => 'Application\Controller\Index',
                        'action' => 'resume',

                    ),
                ),
            ),

            'contact' => array(
                'type' => 'literal',
                'options' => array(
                    'route' => '/contact',
                    'defaults' => array(
                        'controller' => 'Application\Controller\Index',
                        'action' => 'contact',

                    ),
                ),
            ),

            'blog' => array(
                'type' => 'literal',
                'options' => array(
                    'route' => '/blog',
                    'defaults' => array(
                        'controller' => 'Application\Controller\Index',
                        'action' => 'blog',

                    ),
                ),
            ),

            'error' => array(
                'type' => 'literal',
                'options' => array(
                    'route' => '/error',
                    'defaults' => array(
                        'controller' => 'Application\Controller\Index',
                        'action' => 'error',
                    ),
                ),
            ),

        ),
    ),
);
