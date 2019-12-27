#!/usr/bin/env node

import {Command} from 'commander';
import {newProject} from '../commands/new';
import * as pkg from '../package.json';

const program = new Command();

program.version(pkg.version, '-v, --version', 'output the current version');

program
  .command('new <projectName>')
  .description('create a new project')
  .action(newProject);

program.parse(process.argv);
