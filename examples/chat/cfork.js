var cfork = require('cfork');
var cpus = require('os').cpus().length;
var arguments = process.argv.splice(2);
var exec=arguments[0];
if(!exec)exec='index.js';
cfork({
    exec: exec,
    count: cpus,
    args:undefined
})