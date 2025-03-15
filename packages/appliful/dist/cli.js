#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const index_1 = require("./index");
const program = new commander_1.Command();
program
    .version('1.0.0')
    .command('gen <description>')
    .description('Generate AI component')
    .action(async (description) => {
    await (0, index_1.generateAIComponent)(description);
});
program.parse(process.argv);
