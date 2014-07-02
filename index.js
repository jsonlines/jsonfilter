var JSONStream = require('JSONStream')
var combiner = require('stream-combiner')

module.exports = function(filter) {
  return combiner(
    JSONStream.parse(filter),
    JSONStream.stringify('', '\n', '')
  )
}
