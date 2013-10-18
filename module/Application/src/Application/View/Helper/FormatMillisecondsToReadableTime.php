<?php

namespace Application\View\Helper;

use Zend\View\Helper\AbstractHelper;

class FormatMillisecondsToReadableTime extends AbstractHelper
{
    protected $request;

    public function __invoke($milliseconds)
    {

        //$milliseconds = 345345;//$integer;
        $seconds = floor($milliseconds / 1000);
        $minutes = floor($seconds / 60);
        $hours = floor($minutes / 60);
        $milliseconds = $milliseconds % 1000;
        $seconds = $seconds % 60;
        $minutes = $minutes % 60;

    $format = '%02u:%02u';
    $time = sprintf($format, $minutes, $seconds);

    return rtrim($time, '0');

        return rtrim($time, '0');

    }

}
