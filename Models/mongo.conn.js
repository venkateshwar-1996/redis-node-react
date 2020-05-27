const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testcomments", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    useUnifiedTopology: true
  })
  .then((res) => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log("Connot connect");
  });
