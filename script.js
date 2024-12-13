// Sample data for users (In a real app, this would be dynamic from a database)
const users = [
    { id: 1, name: 'John Doe', post: 'This is John\'s post.', isFriend: false },
    { id: 2, name: 'Jane Smith', post: 'This is Jane\'s post.', isFriend: false },
    { id: 3, name: 'Alice Johnson', post: 'This is Alice\'s post.', isFriend: false },
    { id: 4, name: 'Bob Brown', post: 'This is Bob\'s post.', isFriend: false }
  ];
  
  // Function to show the selected section and hide others
  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
  }
  
  // Function to send a friend request
  function sendFriendRequest(userId) {
    const user = users.find(user => user.id === userId);
    if (user) {
      user.isFriend = true;
      alert(`${user.name} is now your friend!`);
      renderFriendsList();
    }
  }
  
  // Function to render the list of friends and posts
  function renderFriendsList() {
    const friendsListDiv = document.getElementById('friends-list');
    friendsListDiv.innerHTML = '';
  
    users.forEach(user => {
      const friendDiv = document.createElement('div');
      friendDiv.classList.add('friend');
  
      const friendName = document.createElement('h3');
      friendName.textContent = user.name;
  
      const friendPost = document.createElement('p');
      friendPost.textContent = user.post;
  
      const friendButton = document.createElement('button');
      if (user.isFriend) {
        friendButton.textContent = 'Friend';
        friendButton.disabled = true; // If already friends, disable the button
      } else {
        friendButton.textContent = 'Send Friend Request';
        friendButton.onclick = () => sendFriendRequest(user.id);
      }
  
      friendDiv.appendChild(friendName);
      friendDiv.appendChild(friendPost);
      friendDiv.appendChild(friendButton);
      friendsListDiv.appendChild(friendDiv);
    });
  }
  
  // Initially display the home section and render friends list
  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    renderFriendsList();
  });
  