<?php
define ('ALLOW_EXTERNAL', TRUE);
define ('MAX_FILE_SIZE', 524288); //512KB
define ('MAX_WIDTH', 1140); 
define ('MAX_HEIGHT', 768); 
define ('NOT_FOUND_IMAGE', '404.png');
define ('ERROR_IMAGE', '404.png');
if(! defined('OPTIPNG_ENABLED') )       define ('OPTIPNG_ENABLED', true);
if(! defined('OPTIPNG_PATH') )          define ('OPTIPNG_PATH', '/opt/local/bin/optipng'); //This will run first because it gives better compression than pngcrush. 
if(! defined('PNGCRUSH_ENABLED') )      define ('PNGCRUSH_ENABLED', true);
if(! defined('PNGCRUSH_PATH') )         define ('PNGCRUSH_PATH', '/opt/local/bin/pngcrush'); //This will only run if OPTIPNG_P
define ('MEMORY_LIMIT', '10M'); 
define('ALLOW_ALL_EXTERNAL_SITES',FALSE);
$ALLOWED_SITES=array('svenardo.com','www.sol.no');
define('FILE_CACHE_DIRECTORY','../../data/cache/tt');
