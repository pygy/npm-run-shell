

`/!\` I'm afraid this approach is a dead end, for [various reasons](#known-issues). Check out [`npm-run`](https://www.npmjs.com/package/npm-run) instead. `/!\`

##npm-run-shell

Runs a shell in the `npm run-script` environment.

It adds the binaries of local npm packages in the command path, and optionally passes the `npm_*` environment variables to the child shell.

###Installation:

in the target package:

```Shell
$ npm install npm-run-script
```

Pass `-D` to `npm install` if you want to save it to the `"devDependencies"`.

Then add this to the in the `"scripts"` sections of your package.json:

```JSON
{
    "scripts":{
        "shell": "npm-run-shell"
    }
}
```

###Usage:

```
    npm run shell [npmenv]
```

You'll get a shell 


Without the `npmenv` option, you get a new shell prompt and the binaries exported by the package dependencies will be runnable.

Passing `npmenv`, you'll get the same shell, but with the environment variables set by NPM also available.

### Known issues

* At this point, the shell is non-interactive in Windows, and it exits immediately (at least if your shell is `cmd.exe`).
* If your startup scripts (`.bashrc` and friends) alter the `$PATH` variable, you may end up with local NPM binaries shadowed by the ones of the system, notably global NPM ones. TODO: figure out how to give them more priority, possibly by tweaking the startup files using a custom environment variable to trigger a 'rotate the paths' code path.
* the nested shell starts at the root of the current project, because `npm run` sets it as current directory. I couldn't find a workaround that doesn't rely on a global script. `npm-run-shell` runs from within the `run-script` environment and the information is lost AFAICT.