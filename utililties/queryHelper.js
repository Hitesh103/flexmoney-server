const {connection} = require('../config/db.js');

function Query(query) {
    return new Promise(function (resolve, reject) {
      connection.query(query, function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

module.exports =  Query;