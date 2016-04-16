#!/bin/sh
BIN_PATH=./node_modules/.bin/

npm i

env=$1;

if [ "${env}" = "" ]; then
  env=prod
fi

# initialize attribution
${BIN_PATH}newman -c attribution-initialize.json -e env-${env}.json
${BIN_PATH}babel-node --presets es2015 post.js attribution
${BIN_PATH}newman -c tmp/attribution-post.json -e env-${env}.json
${BIN_PATH}newman -c restart.json -e env-${env}.json

# initialize record
${BIN_PATH}newman -c record-initialize.json -e env-${env}.json
${BIN_PATH}babel-node --presets es2015 post.js record
${BIN_PATH}newman -c tmp/record-post.json -e env-${env}.json
