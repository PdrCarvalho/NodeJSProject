const db = require('../database/db')

exports.insertPlayer = function(set, playerScore, playerName, callback) {
    db.zadd(set, playerScore, playerName, (err, reply) => {
        callback(err)
    });       
}