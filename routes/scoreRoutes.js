const express = require('express')
const scoreRoute = express.Router()
const Scores = require("./../models/scores")


scoreRoute.route("/")
    .get((req, res) => {
        Scores.find((err, scores) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(scores)
        })
    })


    .post((req, res, next) => {
        let newScore = new Scores(req.body)
        newScore.save().then(savedScore => 
            res.status(201).send(savedScore)).catch(err => {
                res.status(500)
                next(err)
            })
    })

    scoreRoute.route("/:_id")
        .put((req, res) => {
            Scores.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, (err, scores) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(scores)
            })
        })

    module.exports = scoreRoute