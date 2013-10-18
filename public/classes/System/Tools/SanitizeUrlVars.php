<?php
namespace System\Tools;


/**
 * SanitizeUrlVars class.
 * Uses preg_match to remove unsafe strings
 *
 * How to use:
 *
 * try
 * {
 *   $sanitize->input=$_GET["key"];
 *   $var=$sanitize->sanitize();
 * }
 *  catch (Exception $e) {
 *  echo 'Failed, function threw exception: '.  $e->getMessage(). "\n";
 * }
 * Content of $var will contain the safe output from the $_GET["var"] string
 *
 */
class SanitizeUrlVars{
	public $input;

	public function __construct(){
		$input=$this->input;
	}

	private $unsafe_html=array( "/\</",
		"/\>/",
		"/(?i)javascript/",
		"/(?i)embed.*swf/",
		"/(?i)vbscri/",
		"/(?i)onblur/",
		"/(?i)onabort/",
		"/(?i)string/",
		"/(?i)alert/",
		"/(?i)fromCharCode/",
		"/(?i)onchange/",
		"/(?i)onclick/",
		"/(?i)onerror/",
		"/(?i)onsubmit/",
		"/(?i)onreset/",
		"/(?i)onload/",
		"/(?i)onchange/",
		"/(?i)onfocus/",
		"/(?i)onmouseover/",
		"/(?i)onmouseout/",
		"/(?i)script/",
		"/(?i).js/"
	);

	public function sanitize(){
		if(empty($this->input)){
			throw new \Exception("Missing input");
		}
		foreach ( $this->unsafe_html as $match ) {
			$this->input=preg_replace($match,'',$this->input );
		}
		return $this->input;
	}


}

?>