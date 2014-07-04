# jsonfilter

Streaming JSON filtering on the command line.

Works great for JSON datasets that are too big to JSON.parse() or for situations where you want to start reading data immediately.

Powered by [JSONStream](https://www.npmjs.org/package/JSONStream) which is powered by [jsonparse](https://www.npmjs.org/package/jsonparse)

[![NPM](https://nodei.co/npm/jsonfilter.png?global=true)](https://nodei.co/npm/jsonfilter/)

## usage

Pipe JSON data to stdin!

```
jsonfilter <filter>
```

`filter` is a string to 'query' your JSON with.

Matches will be printed as Newline Delimited JSON (NDJSON)

**some examples:**

`"name"` matches the key `name` in an object and returns the value.

```BASH
$ echo '{"name": "foo", "type": "bar"}{ "name": "foobar", "type": "barfoo"}' | jsonfilter "name"
# "foo"
# "foobar"
```

`"rows.*"` matches any child elements (items inside the array) of `rows`, e.g.:

```BASH
$ echo '{"rows": [ {"this object": "will be matched"}, {"so will": "this one"} ]}' | jsonfilter "rows.*"
# {"this object": "will be matched"}
# {"so will": "this one"}
```

`"rows.*.doc"` matches all children of `rows` with key `doc`, e.g.:

```BASH
$ echo '{"rows": [ {"doc": {"this object": "will be matched"}, "foo": "bar"} ]}' | jsonfilter "rows.*.doc"
# {'this object': 'will be matched'}
```

`"rows..doc"` recursively matches all children of `rows` and emits all with key `doc`, e.g.:

```BASH
$ echo '{"rows": [ {"foo": {"bar": {"baz": {"taco": {"doc": "woo"}}}}} ]}' | jsonfilter "rows..doc"
# "woo"
```
