const db = require('../database/db')

exports.getAll = function(set, callback) {
    db.zrange(set, 0, 9, 'withscores', (err, result) => {
        callback(err, result)
    });
}

exports.getPositionPlayer = function(set, position, callback) {
    db.zrange(set, position, position, 'withscores', (err, result) => {
        callback(err, result)
    })
}