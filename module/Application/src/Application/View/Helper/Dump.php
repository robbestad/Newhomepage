<?php
// ./module/Application/src/Application/View/Helper/Dump.php
namespace Application\View\Helper;

use Zend\View\Helper\AbstractHelper;

class Dump extends AbstractHelper
{

    public function __invoke($array)
    {
        return var_dump($array);

    }

}
