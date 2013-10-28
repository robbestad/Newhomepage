<?php
namespace TwigExtensions;

class Module
{
    public function __construct()
    {

    }

    public function getName()
    {
        return 'twig-extensions';
    }


    public function getGlobals() {
        return array(
            'session'   => $_SESSION,
        ) ;
    }
}
