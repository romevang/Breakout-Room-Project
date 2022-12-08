# Breakout-Room-Project
## California State University Fresno - CSCi156 websocket/chat/breakout room project

The folder "156Submission" includes the working product. Its really rudementary but it is functional. Two things to be aware of is: 

1) There's no persistent state, upon switching rooms or reloading, you'll have to re-enter your username.
2) You can use the 'empty' string (Two spaces) for a user name.

**Server side requires: node.js**
https://nodejs.org/en/

**Used Socket.IO https://socket.io/docs/v4/ libraries.**

--------------------------------------------------------------------
### Installation instructions:

**To install NPM you'll need to install node.js framework:**

In windows via the installer page on the nodejs.org website (https://nodejs.org/en/).

Linux/Mac OS use either your package manager of choice or brew on Mac OS (Mac OS users can also go to the NodeJS website linked above).

**install nodemon:**

Once NPM (node package manager) is installed, in your linux/Mac OS terminal or your command prompt (windows) run these two commands.
```
npm install -g nodemon
npm install --save-dev nodemon
```

**Edit script.js:**

To ensure proper operation, edit the script.js file inside the folder in **156Submission/public.** (See below) On line 2, you'll need to change the URL to indicate the location of your server, for example if ran locally then use: 
```
const socket = io("http://localhost:Almost_Any_Port_Number/", { transports: ['websocket'] });
```

Ensure your terminal/command prompt directory is pointed to the root of the **156Submission** folder (usually done with the "cd" command)
inside the **156Submission** folder run:

**Start Chat Server:**
```
npm run devStart
```
Keep terminal window open and the server will start listening for connections. Via your web browser, type the address specified above: ```http://localhost:8080/``` as an example and your room should load. 




