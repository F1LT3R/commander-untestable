# Commander Untestable

Demonstration showing how Commander lets process.argv input contaminate provided input, making Commander untestable in some situations. For example: running with AVA test runner.

Steps to test

```bash
yarn
ava
```

Screenshot

[Screenshot](https://i.imgur.com/yJzaJtm.png)

Error detail

```bash
  1 test failed

  pizza with no sauce

  /Users/al/repos/cmdr-test/node_modules/commander/index.js:462

  Error thrown in test:

  TypeError [ERR_INVALID_ARG_TYPE] (NodeError) {
    message: 'The "path" argument must be of type string. Received type object',
  }

  Command.parse (node_modules/commander/index.js:462:30)
  Object.run (script.js:7:3)
  run (test.js:5:24)
```
