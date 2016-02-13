#!/bin/sh

npm i -g newman
newman -c attribution-initialize.json
newman -c record-initialize.json
