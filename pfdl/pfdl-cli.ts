#! /usr/bin/env bun

import { Command } from "commander";

const program = new Command();

program
    .option('--first')
    .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
