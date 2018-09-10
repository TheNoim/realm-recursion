# fastify recursion bug

Related to [this](https://github.com/realm/realm-js/issues/1532) issue.

```bash
$ yarn
$ node index.js
//realm-recursion/index.js:43
console.log(JSON.stringify(persons.slice()));
                 ^

RangeError: Maximum call stack size exceeded
    at JSON.stringify (<anonymous>)
    at Object.<anonymous> (//realm-recursion/index.js:43:18)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
```