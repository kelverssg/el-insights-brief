// generate-pdf.js — Convert brief.html to brief.pdf (A4, print-ready)
// Usage: node generate-pdf.js [input.html] [output.pdf]
// Requires: npm install puppeteer

import puppeteer from 'puppeteer';
import { resolve } from 'path';

const input  = resolve(process.argv[2] || 'brief.html');
const output = resolve(process.argv[3] || 'brief.pdf');

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page    = await browser.newPage();

await page.goto(`file://${input}`, { waitUntil: 'networkidle0' });
await page.pdf({
  path: output,
  format: 'A4',
  margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
  printBackground: true,
});

await browser.close();
console.log(`PDF saved: ${output}`);
