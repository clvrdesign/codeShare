const express = require('express')
const route = express.Router()

// return all posts
route.get('/', (req, res)=>{
    res.send('Return all posts')
})

// return a single post
route.get('/:id', (req, res)=>{
    res.send('Return a single post')
})

// create a post
route.post('/', (req, res)=>{
    res.send('Create a post')
})

// update a post
route.patch('/:id', (req, res)=>{
    res.send('Update a post')
})

// delete a post
route.delete('/:id', (req, res)=>{
    res.send('Delete a post')
})


module.exports = route