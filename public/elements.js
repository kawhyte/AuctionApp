// Query DOM
const status = document.getElementById("status"),
messages = document.getElementById("messages"),
textarea = document.getElementById("textarea"),
username = document.getElementById("username"),
feedback = document.getElementById('feedback');

let statusDefault = status.textContent

//connect to socket.io

const socket = io.connect("http://127.0.0.1:4000/");

// check for conncetion 

if (socket !== undefined){

    console.log('Connected to Client ')
}