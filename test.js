#!/usr/bin/env node
require('shelljs/global');

if (!which('gulp')) {
    throw new Error('Requires gulp in $PATH!');
}

console.log('Using Gulp version(s):');
exec('gulp -v');

function runTask(name) {
    return exec('gulp reject:' + name, { silent: true }).code;
}

var tasks = ['with-value', 'without-value', 'empty-string', 'bool-false', 'bool-true', 'array', 'empty-array', 'object', 'empty-object'];

var numCorrect = 0;
var numIncorrect = 0;
var total = tasks.length;

tasks.forEach(function verifyTask(task) {
    var exitCode = runTask(task);
    if (exitCode === 0) {
        ++numIncorrect;
        console.log(task + ':', '✗');
    } else {
        ++numCorrect;
        console.log(task + ':', '✓');
    }
});

console.log([numCorrect, '✓', '/', numIncorrect, '✗.', 'Out of:', total, '(' + ((numCorrect / total) * 100).toString(10).substr(0, 5) + '%).'].join(' '));
