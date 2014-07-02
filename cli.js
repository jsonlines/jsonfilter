#!/usr/bin/env node

var fs = require('fs')
var jsonfilter = require('./')
var firstArg = process.argv[2]
process.stdin.pipe(jsonfilter(firstArg)).pipe(process.stdout)
