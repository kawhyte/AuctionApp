const mongo = require("mongodb").MongoClient;
const client = require("socket.io").listen(4000).sockets;

// connect to Mongo

mongo.connect("mongodb://127.0.0.1/mongochat", (err, db) => {
  if (err) {
    throw err;
  }
  console.log("Mongo DB connected");

  //connect to SocketIO
  client.on("connection", () => {
    let connect = db.collection("chats");

    //funtion to send status
    sendStatus = s => {
      socket.emit("status", s);
    };

    //Get chats from mongo collection
    chat
      .find()
      .limit(100)
      .sort({ _id: 1 })
      .toArray((err, res) => {
        if (err) {
          throw err;
        }

        // Emit the message
        socket.emit("output", res);
      });

    //Handle input events
    socket.on("input", data => {
      let name = data.name;
      let message = data.message;

      if (name === "" || message === "") {
        sendStatus("Name or message cannot be blank");
      } else {
        // Insert into Database
        chat.insert({ name: name, message: message }, () => {
          client.emit("output", [data]);
//staus
          sendStatus({ message: "message sent", clear: true });
        });
      }
    });
  });
});
