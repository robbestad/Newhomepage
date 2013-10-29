<?php
namespace ZfcTwig\Twig\Extension;

use Twig_Extension;
use ZfcTwig\View\Renderer\TwigRenderer;

class SarTwig extends Twig_Extension
{

    public function getName()
    {
         return 'sar-twig';
    }


    public function getGlobals() {
        return array(
            'session'   => $_SESSION,
        ) ;
    }
}
