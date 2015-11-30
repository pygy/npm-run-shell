#! /usr/bin/env node
var child_process = require('child_process');
var os = require('os');


var options, exitKeyCombo
if (os.platform() === 'win32') {
    options = [];
    exitKeyCombo = '^Z'
} else {
    options = ['-i'];
    exitKeyCombo = '^D'
}

if (process.argv[2] === 'npmenv'){
    console.log("Opening a subshell running in the `npm run-script` environment.")
} else {
    for (var v in process.env) if (v.match(/^npm_/)) delete process.env[v];
    console.log("Opening a subshell with access to the binaries of local npm packages.")
}

console.log("Type 'exit' or ^D when done.")
console.log("")

var res = child_process.spawnSync(
    process.env.SHELL,
    options, 
    { stdio: ['pipe', process.stdout, process.stderr] }
);


console.log("")
console.log("Done running `npm run shell`.")
console.log("")

// process.exit(res.status);
