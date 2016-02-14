#!/bin/sh
BIN_PATH=./node_modules/.bin/

npm i

# initialize attribution
${BIN_PATH}newman -c attribution-initialize.json
${BIN_PATH}babel-node --presets es2015 post.js attribution
${BIN_PATH}newman -c tmp/attribution-post.json
${BIN_PATH}newman -c restart.json

# initialize record
${BIN_PATH}newman -c record-initialize.json
${BIN_PATH}babel-node --presets es2015 post.js record
${BIN_PATH}newman -c tmp/record-post.json
