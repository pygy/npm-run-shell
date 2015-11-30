#npm-run-shell

Run a shell in the `npm run-script` environment.

This adds the binaries of local packages in the command path.

Installation:

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

Now, from the root of the project, launch this:

```Shell
$ npm run shell [npmenv]
```

Without the `npmenv` option, you get a new shell prompt and the binaries exported by the package dependencies will be runnable.

Passing `npmenv`, you'll get the same shell, but with the environment variables set by NPM also available.
