#
# WATCH LESS FILES
build:
	@echo "Compiling lessfiles to css"; \
	lessc less/flat-ui.less css/flat-ui.css
watch:
	echo "Watching less files..."; \
	watchr -e "watch('less/.*\.less') { system 'make' }"

.PHONY: watch
