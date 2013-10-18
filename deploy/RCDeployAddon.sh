#!/bin/bash

########################################################
# Redefining Variables to meaningfull manes
########################################################
PRODUCT=$1
TAG=$2
ENV=$3

########################################################
# Run Composer
########################################################
php composer.phar self-update
php composer.phar install
