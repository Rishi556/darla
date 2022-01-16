const darla = require("./index.js")
const fs = require("fs")

const DEFAULT_CONFIG = {
  console : {
    debug : true,
    info : true,
    warn : true,
    error : true
  },
  file : {
    debug : true,
    info : true,
    warn : true,
    error : true
  }
}

beforeEach(() => {
  darla.setLevel("console", "debug")
  darla.setLevel("file", "debug")
  darla.setLogFilePath("./log.log")
});

test('defaults to be correct', () => {
  expect(darla.getConfig()).toStrictEqual(DEFAULT_CONFIG)
  expect(darla.getLogFilePath()).toBe("./log.log")
});