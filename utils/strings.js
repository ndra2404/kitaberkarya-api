/**
 * Serialize object data
 *
 * @param {object} obj - Object data
 */
const serialize = function(obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

/**
 * Remove all same leading character  
 *
 * @param {string} str - string to modify
 * @param {char} c - all same leading character to remove
 */
const removeLeadingChar = (str, c) => {
  if (str[0] == c) {
    strNew = str.substring(1)
    return removeLeadingChar(strNew, c)
  } else {
    return str
  }
}

const isEmpty = (obj) => {
  try 
  {  
    let json = {};
    let arr = [];
    if (obj === null || obj === '' || obj === {} || obj === undefined || ((json.constructor ===  obj.constructor || arr.constructor ===  obj.constructor ) && Object.keys(obj).length === 0) || (obj && obj.length === 0) ){
      return true;
    } else {
      return false;
    }  
  } catch (e) {
    return true;
  }
}

const betweenRandomNumber = (min, max) => {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

const generateRandomPassword = () => {  
  return betweenRandomNumber(1000, 9999)
}


const crypto = require('crypto')
const encrypt = (text, key) => {
  try {
    if (key.length < 32 ) {
     key = key.padStart(32, '0'); 
    } else {
      key = key.substring(0, 32); 
    } 
    const IV_LENGTH = 16 // For AES, this is always 16
    let iv = crypto.randomBytes(IV_LENGTH)
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv)
    let encrypted = cipher.update(text)

    encrypted = Buffer.concat([encrypted, cipher.final()])

    return iv.toString('hex') + ':' + encrypted.toString('hex')
  } catch (err) {
    console.log(err)
    throw err
  }
}
const decrypt = (text, key) => {
  try {    
    if (key.length < 32 ) {
      key = key.padStart(32, '0'); 
    } else {
      key = key.substring(0, 32); 
    } 
    let textParts = text.split(':')
    let iv = Buffer.from(textParts.shift(), 'hex')
    let encryptedText = Buffer.from(textParts.join(':'), 'hex')
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedText)

    decrypted = Buffer.concat([decrypted, decipher.final()])

    return decrypted.toString()
  } catch (err) {
    console.log(err) 
    throw err
  }
}
const left = (param,len) => {    
  return param.substring(0, len)
}
const right = (param,len) => {    
  let strlen = param.length
  if (len < strlen && len > 0) {
    return param.substring(strlen - len, strlen) 
  } else {
    return param 
  }
}
module.exports = { isEmpty, serialize, removeLeadingChar, generateRandomPassword ,encrypt,decrypt, left, right };
