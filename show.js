// process.stdin.resume();

const { assert, dir, info, log, trace } = console;
const show = (res, newLine = 1) =>
  newLine ? log(`\n${res}\n`, ~~res) : log(`\n${res}\t`, ~~res);

