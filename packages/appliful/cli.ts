#!/usr/bin/env node

import { Command } from "commander";
import { generateAIComponent } from './index';

const program = new Command();

program
  .version('1.0.0')
  .command('gen <description>')
  .description('Generate AI component')
  .action(async (description: string) => {
    await generateAIComponent(description);
  });

program.parse(process.argv);