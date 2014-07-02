#!/usr/bin/env node

var fs = require('fs')
var jsonfilter = require('./')
var firstArg = process.argv[2]
process.stdin.pipe(jsonfilter(firstArg)).on('data', function(o) {
  process.stdout.write(o)
}).on('end', function() {
  console.log('')
})
