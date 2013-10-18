<?php
// ./module/Application/src/Application/View/Helper/VideoId.php
namespace Application\View\Helper;

use Zend\View\Helper\AbstractHelper;

class VideoId extends AbstractHelper
{
    protected $request;

    public function __construct()
    {
    }

    public function __invoke()
    {
        $uri=parse_url($_SERVER["REQUEST_URI"]);
        $array=explode("/", $uri["path"]);

        return($array[count($array)-1]);

    }

}
