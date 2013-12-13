<?php

namespace SarMarkdown\Markdown;

class Markdown
{
    protected $hello;


    public function getViewHelperConfig()
    {
        return array('services' => array('markdown' => $this));
    }


    public function __invoke($string = null)
    {
        require_once __DIR__ . '/php-markdown-old/markdown.php';
        return Markdown($string);
    }

    public function __construct()
    {
        $this->hello="Hi! I come in peace";

    }

    public function getHello()
    {
        return $this->hello;
    }



}