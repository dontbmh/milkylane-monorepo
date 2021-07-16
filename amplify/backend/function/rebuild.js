const { resolve } = require('path');
const { execSync } = require('child_process');

const cwd = process.cwd();
const tsc = resolve(__dirname, 'node_modules/.bin/tsc');
const rimraf = resolve(__dirname, 'node_modules/.bin/rimraf');

console.log(cwd);

execSync(`${rimraf} ../dist ../src ../lib/nodejs`, { cwd });
execSync(tsc, { cwd });
