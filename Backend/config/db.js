const mongoose = require("mongoose");

function connectDB() {
    try{
        console.log("MongoDb Connected");
    }
    catch(err){
        console.log("MongoDB not Connected");
    }
}

module.exports = connectDB;