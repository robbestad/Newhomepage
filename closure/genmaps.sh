#!/bin/bash
java -jar compiler.jar \
	 --warning_level=QUIET \
   --js ../public/js/jquery-2.0.3.js \
	 --js ../public/js/jquery.iosslider.js \
	 --js ../public/js/menu.js \
	 --js ../public/js/html5.js \
	 --js ../public/js/loader.js \
	 --js ../public/js/XRegExp.js \
	 --js ../public/js/analytics.js \
	 --js ../public/js/prefixfree.js \
	 --js ../public/js/prism.js \
	 --js ../public/js/auth.js \
	 --js ../public/js/screen9.js \
	 --js ../public/js/bootstrap/bootstrap.js \
	 --js ../public/js/tests.js  \
	 --create_source_map ../public/js/jquery.min.map \
	 --source_map_format=V3 \
	 --js_output_file ../public/js/scripts-min.js
