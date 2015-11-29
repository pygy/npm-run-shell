#npm-run-shell

This adds the binaries of local packages in the command path.

In the package you want to explore:

```Shell
$ npm install npm-run-script
```

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
$ npm run shell
```