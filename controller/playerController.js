const playerService = require('../service/playerService')

exports.insertPlayer = (req, res) => {
    const {player, score } = req.body
        if((player)&&(score)){
        playerService.insertPlayer('ranking:player',score, player, (err) => {
            if (err) {
                res.status(500).jsonp({error : 'Internal error'})
            }
            else {
                res.redirect('/')
            }
        });
    }
    
}