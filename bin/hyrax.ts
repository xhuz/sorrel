#!/usr/bin/env node --harmony

import {Command} from 'commander';
import {version} from '../commands/version';

const program = new Command();

program
  .version('0.0.1')
  .option('-f, --foo', 'enable some foo')
  .option('-b, --bar', 'enable some bar')
  .option('-B, --baz', 'enable some baz');

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
