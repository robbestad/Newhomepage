<?php

namespace Application\View\Helper;

use Zend\View\Helper\AbstractHelper;
use Application\Service\AdHandler;

class AdHelper extends AbstractHelper
{
    private $adHandler;
    private $_config;
    public function __construct($config)
    {

        $this->_config=$config["solcommon"];
    }

    public function __invoke()
    {
        if ($this->adHandler) {
            return $this->adHandler;
        }
        $this->adHandler = new AdHandler($this->_config);

        return $this->adHandler;
    }
}
