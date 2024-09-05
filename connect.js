const mongoose = require('mongoose');

async function connectToMongoDB(url) {
    try{
        await mongoose.connect(url);
        console.log('connected to MongoDB');
    }
    catch(error){
        console.log('Failed to connect to MongoDB', error);
        process.exit(1);
    }}

    module.exports = { connectToMongoDB};
    