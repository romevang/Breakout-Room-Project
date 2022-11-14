# Breakout-Room-Project
CSCi156 websocket/chat/breakout room project

The folder testServer is the python implementation of the server side. It works but it only writes to console.log, not needed at the moment for testing.


If you want to run it as is:
node.js is needed to run the server side components (only temporary).
https://nodejs.org/en/

Used Socket.IO https://socket.io/docs/v4/ library.

All the files must be in the same directory. To test do the following:

-Set your terminal/Command prompt to point to the project directory (you can do this within VS code as well).
-Type: node index.js (leave terminal/command prompt window open).
-Navigate with your browser to localhost:3000/
-Chat window should load, and you'll be able to send and echo back those messages.
