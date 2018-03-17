module.exports = (str, res, func = console.log) =>
  func(`\n ${str}\n${' '.repeat(4)}`, res);
