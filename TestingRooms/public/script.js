//Where server is hosting --> Location
const socket = io("http://localhost:3000", { transports: ['websocket'] });

//This is changing the html
const messageContainer = document.getElementById("messageContainer")
const messageForm = document.getElementById("sendMessage");
const messageInput = document.getElementById("messageInput");
const roomContainer = document.getElementById("roomContainer")

//Getting Name and placing it into the server
if (messageForm != null) {
    const name = prompt('What is your name?');
    appendMessage('You have joined the chat!');
    socket.emit('newUser', roomName, name);

    //This is the form that we get from the html, this includes sending the message
    messageForm.addEventListener('submit', e => {
        e.preventDefault();
        const message = messageInput.value;
        //Only do this function if the message is not empty or equal to ' '
        if (message != '') {
            if (message != ' ') {
                //Display the message onto the screen for everyone to see
                appendMessage(`You: ${message}`)
                //Send message function --> Will be inside server.js
                socket.emit('sendChatMessage', roomName, message); //roomName is passed in from the room.ejs
                //empty the message input value
                messageInput.value = '';
            }
        }
    })

}


//Created the room page
socket.on('roomCreated', room => {
    const roomElement = document.createElement('div');
    roomElement.innerText = room;
    const roomLink = document.createElement('a');
    roomLink.href = `/${room}`;
    roomLink.innerText = "Join";
    roomContainer.append(roomElement);
    roomContainer.append(roomLink);
})

//This is saying who has connected
socket.on('userConnected', name => {
    appendMessage(`${name} has connected!`);
})

//This is saying who has disconnected
socket.on('userDisconnected', name => {
    appendMessage(`${name} has disconnected!`);
})

//This is sending the message
socket.on('chatMessage', data => {
    appendMessage(`${data.name}: ${data.message}`);
})


//This is how we are displaying the messages onto the screen
function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.appendChild(messageElement);
}
