const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();
const DatabaseConnection = () => {
    mongoose.connect('mongodb+srv://bhuvankaushal08112002:M8q85CYUkMJejSOJ@cluster0.0km1b1v.mongodb.net/events');
    const db = mongoose.connection;
    db.on('connected', () => {
        console.log('Mongoose connection is successful');
    });
    

    // Event for connection error
    db.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });

    // Event for disconnected
    db.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
}

module.exports={DatabaseConnection}

