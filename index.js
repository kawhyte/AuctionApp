const mongo = require("mongodb").MongoClient
const client = require("socket.io").listen (4000).sockets

// connect to Mongo

mongo.connect('mongodb://127.0.0.1/mongochat', (err, db)=>{
if(err){
    throw err;
}
 console.log ( "Mongo DB connected");

 //connect to SocketIO
 io.on("connection", () => {
     let connect =  db.collection('chats');

     //funtion to send status
     sendStatus
 })

})


