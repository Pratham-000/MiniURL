const mongoose = require("mongoose");

async function connectTOMongoose(url)
{
    return mongoose.connect(url);
}

module.exports = 
{
    connectTOMongoose
}