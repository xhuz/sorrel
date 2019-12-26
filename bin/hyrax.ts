#!/usr/bin/env node --harmony

import {Command} from 'commander';
import {newProject} from '../commands/new';
import * as pkg from '../package.json';

const program = new Command();

program.version(pkg.version, '-v, --version', 'output the current version');

program
  .command('new <projectName>')
  .description('create a new project')
  .action(newProject);

// must be before .parse() since
// node's emit() is immediate

// program.on('--help', function () {
//   console.log('');
//   console.log('Examples:');
//   console.log('  $ custom-help --help');
//   console.log('  $ custom-help -h');
// });

program.parse(process.argv);

// console.log('stuff');
