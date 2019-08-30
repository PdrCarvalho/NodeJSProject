const rankService = require('../service/rankService')

exports.topTen = (req, res) => {
    rankService.getAll('ranking:player', (err, result) => {
        if (err) {
            res.status(500)
        }
        else {
            var playersList = []
            var positionInRanking = 0
            for (var x=0; x < result.length; x += 2) {
                playersList[positionInRanking] = {
                    "position" : positionInRanking + 1, 
                    "player" : result[x], 
                    "score" : result[x+1],
                }

                positionInRanking++
            }
            playersList.reverse()
            res.render('list', { playersList })
        }
    });
}

exports.getPositionPlayer = (req, res) => {
    var position = req.query.position -1
    if(!position){  
       position = req.params.position - 1
    }
    // rankService.getPositionPlayer('ranking:player', position, (err, result) => {
    //     if (err) {
    //         res.status(500)
    //     }
    //     else {
    //         var player = {
    //             "player" : result[0],
    //             "score" :  result[1]
    //         }
    //         playersList=[]
    //         playersList[0] = player 
    //         res.render('player', { playersList })
    //     }
    // });
    rankService.getAll('ranking:player', (err, result) => {
        if (err) {
            res.status(500)
        }
        else {
            var playersList = []
            var positionInRanking = 0
            for (var x=0; x < result.length; x += 2) {
                playersList[positionInRanking] = {
                    "position" : positionInRanking + 1, 
                    "player" : result[x], 
                    "score" : result[x+1],
                }

                positionInRanking++
            }
            playersList.reverse()
            ply = playersList[position]
            res.render('player', { ply })
        }
    });
}