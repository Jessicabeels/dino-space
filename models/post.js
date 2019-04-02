const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    caption: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    summary: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Post", postSchema)