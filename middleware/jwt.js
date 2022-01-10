const jwt = require('jsonwebtoken');
const string = require('../utils/strings')

/**
 * Validate JWT token
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
const checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'] || req.query['token'] || req.params['token'];
  if (token) {
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }
    if (!checkEmbededToken(token)) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            success: false,
            message: "Anda tidak diijinkan"
          });
        } else {

          // decrypt info tambahan 
          // decoded.ext = string.decrypt(decoded.ext,process.env.SECRET_KEY)
          if (!string.isEmpty(decoded.ext)) {
            var plainExt = string.decrypt(decoded.ext, process.env.SECRET_KEY)
            decoded.ext = JSON.parse(plainExt)
          } else {
            decoded.ext = {}
          }
          req.decoded = decoded
          // console.log(decoded)
          next();
        }
      });
    } else {
      next();
    }

  } else {
    return res.status(401).json({
      success: false,
      message: "Anda tidak Diijinkan"
    });
  }
};

module.exports = {
  checkToken: checkToken
};
