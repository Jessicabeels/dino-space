const express = require("express")
const postRouter = express.Router()
const Post = require('../models/post.js')


// Add new post for a specific user
postRouter.post("/", (req, res, next) => {
    const newPost = new Post(req.body)
    newPost.user = req.user._id
    newPost.save((err, newPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPost)
    })
})

// Get all posts belonging to a specific user
postRouter.get("/", (req, res, next) => {
    Post.find({user: req.user._id}, (err, userPosts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userPosts)
    })
})

// postRouter.put("/", (req, res, next) => {
//     if(req.user.isAdmin){
            // do awesome admin stuff...
//     } else {
//         res.status(401)
//         return next(new Error("Stooopid.."))
//     }
// })


module.exports = postRouter