const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let output = "";
  let outputArr = [];
  let name = "";

  if (typeof members !== "string" && !Array.isArray(members)){
    return false;
  } else {
    for (let i = 0; i < members.length; i += 1) {
      if (typeof members[i] == "string"){
        name = members[i];
        name = name.toUpperCase();

        for (let j = 0; j < name.length; j +=1){
          if(name[j] !== " "){
            outputArr[i] = name[j];
            break;
          }
        }
      }
    }

    outputArr = outputArr.sort();
    for (let i = 0; i < members.length; i += 1) {
      if (typeof outputArr[i] == "string"){
        output += outputArr[i];
      }
    }
    return output;
  }
}


module.exports = {
  createDreamTeam
};
