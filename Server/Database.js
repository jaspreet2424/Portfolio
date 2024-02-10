const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = async() =>{
    try {
        await mongoose.connect(process.env.DATABASE_LINK);
        console.log(`Database connected successfully`);
    } catch (error) {
        console.log(`Error in connecting with database ${error.message}`);
    }
}

module.exports = connectDatabase;