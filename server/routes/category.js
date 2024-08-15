const express = require('express')
const route = express.Router()
const Category = require('../models/category')

// Return all categories
route.get('/', async (req, res) => {
    try {
        const categories = await Category.find(); // Fetch all categories from the database
        res.status(200).json(categories); // Return the categories with a 200 status code
    } catch (error) {
        console.error('Error fetching categories:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error fetching categories', details: error.message }); // Return a 500 status with error details
    }
});


// Return a single category by ID
route.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const category = await category.findById(id);

        if (!category) {
            return res.status(404).json({ message: 'category not found' }); // Handle case where category doesn't exist
        }

        res.status(200).json(category); // Return the category with a 200 status code
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).send({ message: 'Error fetching category', details: error.message }); // Send a clear error message
    }
});


// Create a category
route.post("/", async (req, res) => {
    // You could alternatively use the data from the request body (req.body) for a more dynamic category creation.
    const category = {
      name: req.body.name
    };
  
    const newCategory = new category(category);
  
    try {
      await newCategory.save(); // Save the new category to the database
      res.status(201).json(newCategory); // Return the newly created category with a 201 status code
    } catch (err) {
      console.error('Error creating category:', err); // Log the error for debugging
      res.status(400).send({ error: 'Error creating category', details: err }); // Return a 400 status code with error details
    }
  });
  

// Update a category
route.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        
        // Get the updated category data from the request body
        const updatedData = {
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            content: req.body.content
        };
        
        // Find the category by ID and update it with the new data
        const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, { new: true });

        // If the category isn't found, return a 404 error
        if (!updatedCategory) {
            return res.status(404).json({ message: 'category not found' });
        }

        // Send the updated category as a response
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).send('Error updating category');
    }
});


// Delete a category by ID
route.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id; // Get the ID from the URL parameters
        
        // Find and delete the category by ID
        const deletedCategory = await Category.findByIdAndDelete(id);
        
        if (!deletedCategory) {
            return res.status(404).json({ message: 'category not found' }); // Handle case where the category is not found
        }

        res.status(200).json({ message: 'Category deleted successfully' }); // Send success message
    } catch (error) {
        console.error('Error deleting category:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error deleting category', details: error.message }); // Return error details
    }
});


module.exports = route