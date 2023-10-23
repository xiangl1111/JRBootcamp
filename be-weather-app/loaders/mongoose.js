const mongoose = require('mongoose');

module.exports = async function () {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrParser: true,
        useUnifiedTopology: true,
    });
    return connection.connection.db;
}
   
   