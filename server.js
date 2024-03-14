const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')

//dotenv config
dotenv.config();

// rest object
const app = express()

//middlerwares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get('/',(req,res) => {
    res.status(200).send({
        message:"server running",
    });
});
// port
const port = process.env.PORT || 8080
//LISTEN PORT
app.listen(port, () => {
    console.log(`server running in ${process.env.NODE_ENV} Mode on port ${port}`.bgCyan.white);
});