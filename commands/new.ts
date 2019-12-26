import {resolve} from 'path';
import {Utils} from '../utils';
import * as shell from 'shelljs';
import * as ora from 'ora';
import * as chalk from 'chalk';
import * as fs from 'fs';

export function newProject(name: string) {
  const basePath = resolve(process.cwd(), name);
  if (Utils.isExistsSync(basePath)) {
    throw new Error('this dir is exists');
  }

  // clone remote repository
  const spinner = ora().start(chalk.cyan('download template files https://github.com/xhuz/huzz-koa-template.git'));
  shell.exec('git clone -q https://github.com/xhuz/huzz-koa-template.git ' + name);
  spinner.succeed(chalk.green('download finished'));

  // npm init
  shell.cd(name);
  spinner.start(chalk.cyan('npm init'));
  initPackage(shell.pwd().stdout, name);
  spinner.succeed(chalk.green('npm init success'));

  // git init
  spinner.start(chalk.cyan('init git repertory'));
  shell.rm('-rf', '.git');
  shell.exec('git init -q');
  shell.exec('git add .');
  shell.exec('git commit -q -m "initial commit"');
  spinner.succeed(chalk.green('git init success!!'));

  // install dependencies
  spinner.start('npm install ......');
  shell.exec('npm install -');
  spinner.stop();

}

function initPackage(path: string, name: string) {
  path = resolve(path, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(path, 'utf-8'));
  pkg.name = name;
  pkg.description = 'hyrax is a nodejs framework based on koa';
  pkg.version = '1.0.0';
  delete pkg.license;
  delete pkg.bugs;
  delete pkg.homepage;
  delete pkg.repository;
  fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
}
