#!/usr/bin/env node

'use strict';

const ngrok = require('ngrok');
const qrcode = require('qrcode-terminal');
const chalk = require('chalk');

const getIP = require('./lib/getLocalIP');
const parser = require('./lib/parser');

const ip = getIP();

async function main() {
  const { type, port, resource } = parser.parseArgs(process.argv.slice(2));

  const serverUrl =
    type === 'local' ? `http://${ip}:${port}` : await ngrok.connect(port);
  const url = `${serverUrl}${resource}`;

  const code = await new Promise((resolve) =>
    qrcode.generate(url, { small: true }, (qr) => resolve(qr))
  );

  const output = [
    `---------------------------`,
    `> ${type} http ${port} ${resource}`,
    `---------------------------`,
    chalk.underline.cyan(url),
    `---------------------------`,
    code,
  ].join('\r\n');

  console.log(output);
}

main()
  .then(() => {})
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
