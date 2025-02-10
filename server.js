require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRouter=require('./routes/productRoute');
const incomeRouter = require('./routes/incomeroute');
const userrouter=require('./routes/userroute');
const user = require('./Module/usermodel');
const app = express();
const port = 3000;
const cors = require('cors');


const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT || 3000
// Middleware to parse incoming JSON request bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200', // Allow requests from your Angular frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods if needed
    credentials: true, // If you're using cookies or authentication
  }));
app.use('/api',productRouter);
app.use('/',userrouter);
app.use('/api',incomeRouter);



// MongoDB connection string (corrected)
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to database");
        app.listen(port, () => {
            console.log("Server is started on port " + port);
        });
    })
    .catch((error) => {
        console.log("Connection Failed", error.message);
    });
    app.get('/', (req, res) => {
        res.send("Node server is started");
    });



// Basic route to check if the server is working




