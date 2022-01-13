const fs = require("fs")

let file_path = "./log.log"

let config = {
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

/**
 * Logs to file
 * @param {String} level level to log at
 * @param {String} message message to log
 */
function logToFile(level, message){
  fs.appendFile(file_path, `[${level}] ${new Date().toUTCString()} - ${message}\n`, (_) => {
    
  })
}

/**
 * Logs to console
 * @param {String} level level to log at
 * @param {String} message message to log
 */
function logToConsole(level, message){
  if (level === "debug"){
    console.log(`[${level}] ${new Date().toUTCString()} - ${message}\n`)
  }
  if (level === "info"){
    console.log(`[${level}] ${new Date().toUTCString()} - ${message}\n`)
  }
  if (level === "warn"){
    console.warn(`[${level}] ${new Date().toUTCString()} - ${message}\n`)
  }
  if (level === "error"){
    console.error(`[${level}] ${new Date().toUTCString()} - ${message}\n`)
  }
}

/**
 * Leaves a debug log
 */
function debug(){
  let message = ""
  message += arguments[0].toString()
  for (let i = 1; i < arguments.length; i++) {
    message += " " + arguments[i].toString()
  }
  if (config.console.debug){
    logToConsole("debug", message.toString())
  }
  if (config.file.debug){
    logToFile("debug", message.toString())
  }
}

/**
 * Leaves a info log
 */
function info(){
  let message = ""
  message += arguments[0].toString()
  for (let i = 1; i < arguments.length; i++) {
    message += " " + arguments[i].toString()
  }
  if (config.console.info){
    logToConsole("info", message.toString())
  }
  if (config.file.info){
    logToFile("info", message.toString())
  }
}

/**
 * Leaves a warn log
 */
function warn(){
  let message = ""
  message += arguments[0].toString()
  for (let i = 1; i < arguments.length; i++) {
    message += " " + arguments[i].toString()
  }
  if (config.console.warn){
    logToConsole("warn", message.toString())
  }
  if (config.file.warn){
    logToFile("warn", message.toString())
  }
}

/**
 * Leaves a error log
 */
function error(){
  let message = ""
  message += arguments[0].toString()
  for (let i = 1; i < arguments.length; i++) {
    message += " " + arguments[i].toString()
  }
  if (config.console.error){
    logToConsole("error", message.toString())
  }
  if (config.file.error){
    logToFile("error", message.toString())
  }
}

/**
 * Sets file path to save log output to
 * @param {String} path filepath to save at
 */
function setLogFilePath(path){
  file_path = path
}

/**
 * Modifys a config element
 * @param {String} location location to edit, either console or file 
 * @param {String} level level to edit, can be debug info warn or error
 * @param {Boolean} value value to ste, true or false
 */
function modifyConfig(location, level, value){
  config[location][level] = value
}

/**
 * Sets a level to use
 * @param {String} location location to edit, either console or file
 * @param {String} level level to use
 */
function setLevel(location, level){
  if (level === "debug"){
    config[location] = {
      debug : true,
      info : true,
      warn : true,
      error : true
    }
  } else if (level === "info"){
    config[location] = {
      debug : false,
      info : true,
      warn : true,
      error : true
    }
  } else if (level === "warn"){
    config[location] = {
      debug : false,
      info : false,
      warn : true,
      error : true
    } 
  } else if (level === "error"){
    config[location] = {
      debug : false,
      info : false,
      warn : false,
      error : true
    }
  } else if (level === "off"){
    config[location] = {
      debug : false,
      info : false,
      warn : false,
      error : false
    }
  }
}

module.exports = {
  debug,
  info,
  warn,
  error,
  setLogFilePath,
  modifyConfig,
  setLevel
}