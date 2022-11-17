//Eric's Globals
let width = 0;
var id = null;

function submitPost() {
  //grabs the UL 'blogs' and assigns it to 'blogList'
  var blogList = document.getElementById('chatBody');
  //grabs all the list items and assigns them to 'newBlogEntry'
  var newBlogEntry = document.createElement('li');
  //grabs input for blog post and proceeds to write our new entry in memory
  newBlogEntry.innerHTML = document.getElementById('user_input').value;


  //Eric's Styling code. This essentially allows the text to resize based on the number and type of character that is inputted in the message
  let temp = document.getElementById('user_input').value;
  temp.toString();
  //Special Characters have their own size per character. These help specify their sizes
  calcWidth(temp);
  //This pairs the size of the text and styles it accordingly
  //JS animations - Eric
  popUp(newBlogEntry);
  // newBlogEntry.style.width = "calc(" + width + "ch + 1.5em)";
  //End of Eric's styling code

  //creates and sets top list item location
  var topBlogEntry = document.querySelectorAll('#chatBody li')[0];
  //takes the current top entry 'topBlogEntry' and moves it down to the next slot
  //newBlogEntry becomes the top most recent post
  blogList.insertBefore(newBlogEntry, topBlogEntry);
  document.getElementById("user_input").value = "";
}

function deletePost() {
  //grabs the UL 'blogs' and assigns it to 'blogList'
  var blogList = document.getElementById('chatBody');
  //grabs all the list items and assigns them to 'nodeList'
  var nodeList = blogList.getElementsByTagName('li');
  //saves the user input to 'inputVal'
  var inputVal = document.getElementById('input').value
  //sets the query selector to point to the desired entry to be removed
  //On the user side i made no compensation for the list 'index' and
  //the index starts at 0 instead of 1.
  var delEntry = document.querySelectorAll('#chatBody li')[inputVal];

  //verifies that there is at least 1 blog entry before removal.
  //if true, then selected blog entry is removed.
  if (nodeList.length >= 0) {
    //Removes the child
    blogList.removeChild(delEntry);
  }

}

document.addEventListener("keyup", function(event) {
  if (['Enter', 'NumpadEnter'].includes(event.key)) {
    //Includes both Enter key and Number pad Enter =)
    submitPost();
  }
});

//Eric -> Calculates the width so that the display is correct for the bubbles
function calcWidth(doc) {
  const specialCharsExSmall = `'|`
  const specialCharSmall = `\`\[\];,.`;
  const specialCharsMed = `\/\\:`;
  const specialCharsLarge = `!\-()`;
  const specialCharsExLarge = `<>_+=`;
  const aTozCap = 'ABCDEFGHKLMNOQRSUVWXYZ';
  let temp = doc;
  width = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] != ' ') {
      width++;
    }
    if (temp[i] == '"') {
      width -= 0.2;
    }
    for (let j = 0; j < specialCharsExSmall.length; j++) {
      if (temp[i] == specialCharsExSmall[j]) {
        width -= 0.6;
        j = specialCharsExSmall.length;
      }
    }
    for (let j = 0; j < specialCharSmall.length; j++) {
      if (temp[i] == specialCharSmall[j]) {
        width -= 0.5;
        j = specialCharSmall.length;
      }
    }
    for (let j = 0; j < specialCharsMed.length; j++) {
      if (temp[i] == specialCharsMed[j]) {
        width -= 0.4;
        j = specialCharsMed.length;
      }
    }
    for (let j = 0; j < specialCharsLarge.length; j++) {
      if (temp[i] == specialCharsLarge[j]) {
        width -= 0.3;
        j = specialCharsLarge.length;
      }
    }
    for (let j = 0; j < specialCharsExLarge.length; j++) {
      if (temp[i] == specialCharsExLarge[j]) {
        width += 0.15;
        j = specialCharsExLarge.length;
      }
    }
    for (let j = 0; j < aTozCap.length; j++) {
      if (temp[i] == aTozCap[j]) {
        width += 0.5;
        j = aTozCap.length;
      }
    }
  }
}


//Eric's Animation function for adding a new message
function popUp(doc) {
  let elem = doc;
  let pos = 0;
  elem.style.width = "calc(" + width + "ch)";
  elem.style.fontSize = 0 + "px";
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos >= 16) {
      clearInterval(id);
    }
    else {
      pos += 2;
      elem.style.fontSize = pos + 'px';
    }
  }
}