const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let output = "";
  let separator = "+";
  let addition = "";
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  let repeatTimes = "1";

  if(options.repeatTimes !== undefined){
    repeatTimes = options.repeatTimes;
  }
  if(options.separator !== undefined){
    separator = options.separator;
  }
  if(options.additionSeparator !== undefined){
    additionSeparator = options.additionSeparator;
  }

  if(options.additionRepeatTimes !== undefined){
    additionRepeatTimes = options.additionRepeatTimes;
  }

  if(options.addition !== undefined){
    addition = options.addition;
    for (let i = 0; i < additionRepeatTimes; i += 1){
      str += "" + addition;
      if (additionRepeatTimes > 1 && i < options.additionRepeatTimes - 1) str += additionSeparator;
    }
  }

  for (let i = 0; i < repeatTimes; i += 1){
    output += str;
    if (i < options.repeatTimes-1) output += separator;
  }

  return output;
}



module.exports = {
  repeater
};
