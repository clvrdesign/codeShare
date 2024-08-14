const express = require('express')
const route = express.Router()

// return all categories
route.get('/', (req, res)=>{
    res.send('Return all categories')
})

// return a single category
route.get('/:id', (req, res)=>{
    res.send('Return a single category')
})

// create a category
route.post('/', async (req, res) => {
    const category = {
        name: "This is a new category", // Using req.body to get the category name
    };

    try {
        const newCategory = await category.create(category);
        res.status(201).send(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).send('Error creating category');
    }
});

// update a category
route.patch('/:id', (req, res)=>{
    res.send('Update a category')
})

// delete a category
route.delete('/:id', (req, res)=>{
    res.send('Delete a category')
})


module.exports = route