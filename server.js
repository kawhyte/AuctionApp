const mongo = require("mongodb").MongoClient
const client = require("socket.io").listen (4000).sockets

// connect to Mongo

mongo.connect('mongodb://127.0.0.1/mongochat', (err, db)=>{
if(err){
    throw err;
}
 console.log ( "Mongo DB connected");

 //connect to SocketIO
 client.on("connection", () => {
     let connect =  db.collection('chats');

     //funtion to send status
     sendStatus = (s)=>{
         socket.emit('status',s)
     }

     //Get chats from mongo collection
     chat.find().limit(100).sort({_id:1}).toArray((err, res)=>{
        if(err){
            throw err;
        }

        // Emit the message 

        socket.emit('output', res)

     });

     //Handle input events
 })

})


