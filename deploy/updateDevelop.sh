#!/bin/sh
cd /storage/www/dev/soltv/current/
sudo git pull
sudo php composer.phar selfupdate
sudo php composer.phar update

