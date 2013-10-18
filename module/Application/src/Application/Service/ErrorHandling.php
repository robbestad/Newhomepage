<?php

namespace Application\Service;

class ErrorHandling
{
    protected $logger;

    public function __construct($logger)
    {
        $this->logger = $logger;
    }

    public function logException(\Exception $e)
    {
        $trace = $e->getTraceAsString();
        $i = 1;
        do {
            $messages[] = $i++ . ": " . $e->getMessage();
        } while ($e = $e->getPrevious());

        $log = "Exception:\n" . implode("\n", $messages);
        $log .= "\nTrace:\n" . $trace;

        $this->logger->err($log);
    }
}
