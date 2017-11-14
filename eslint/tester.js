'use strict';

const { resolve } = require('path');
const { readdirSync } = require('fs');
const { execSync } = require('child_process');

const files = readdirSync(__dirname)
  .filter(fileName => fileName.endsWith('.spec.js'))
  .map(fileName => resolve(__dirname, fileName));

const runCommand = (command, input) =>
  execSync(`yarn ${command}`, { input })
    .toString()
    .replace(/^.*\n/g, '');

for (const file of files) {
  // check config correctness
  runCommand(`eslint --no-eslintrc --stdin -c ${file}`, '');

  // check config compatibility with prettier
  const config = runCommand(`eslint -c ${file} --print-config ${file}`);
  runCommand('eslint-config-prettier-check', config);
}
