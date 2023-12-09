const { connect, connection } = require("mongoose");

connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://127.0.0.1:27017/homework18");

module.exports = connection;