const mongoose = require('mongoose')


const scoresList = new mongoose.Schema({
    first: Number,
    second: Number,
    third: Number
})

module.exports = mongoose.model("Scores", scoresList)