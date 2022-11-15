function submitPost() {
  //grabs the UL 'blogs' and assigns it to 'blogList'
  var blogList = document.getElementById('chatBody');
  //grabs all the list items and assigns them to 'newBlogEntry'
  var newBlogEntry = document.createElement('li');
  //grabs input for blog post and proceeds to write our new entry in memory
  newBlogEntry.innerHTML = document.getElementById('user_input').value;
  //creates and sets top list item location
  var topBlogEntry = document.querySelectorAll('#chatBody li')[0];
  //takes the current top entry 'topBlogEntry' and moves it down to the next slot
  //newBlogEntry becomes the top most recent post
  blogList.insertBefore(newBlogEntry, topBlogEntry);
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
    blogList.removeChild(delEntry);
  }

}
