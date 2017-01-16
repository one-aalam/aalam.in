#!/bin/bash

npm run deploy

( cd ../aalam.in.pages ; git pull ; git push live gh-pages ; )