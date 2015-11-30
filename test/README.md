A dummy pacakge to test npm-run-shell. Run `npm run shell`.

This package has a dependency that registers a `foo` binary, that can be run once in the nested shell.

```Shell
$ git clone https://github.com/pygy/npm-run-shell.git
...
$ cd test
$ npm install
...
$ npm run shell

> npm-run-shell-test@0.0.1 shell /Users/pygy/dev/npm-run-shell/test
> npm-run-shell

$ foo
npm-run-shell works as advertised :-)
# exit the nested shell
$ ^D
# back in the parent.
$
```
