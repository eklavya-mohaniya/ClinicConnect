const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.status(200).send({
        message: "Server is running",
    });
});

// Port configuration
const port = process.env.PORT || 8080;

// Listen for connections
app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} Mode on port ${port}`.bgCyan.white);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
