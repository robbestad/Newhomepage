<?php
// ./module/Application/src/Application/View/Helper/GetPath.php
namespace Application\View\Helper;

use Zend\View\Helper\AbstractHelper;

class GetPath extends AbstractHelper
{
    protected $request;

    public function __construct()
    {
    }

    public function __invoke()
    {
        $array=parse_url($_SERVER["REQUEST_URI"]);
        //$this->_helper->viewRenderer->assign('path', $array);
        return $array["path"];

    }

}
