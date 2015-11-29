#! /usr/bin/env node
var child_process = require('child_process');
var os = require('os');

var options = os.platform() === 'win32' ? [] : ['-i'];

var res = child_process.spawnSync(
    process.env.SHELL,
    options, 
    { stdio: ['pipe', process.stdout, process.stderr] }
);

// process.exit(res.status);
