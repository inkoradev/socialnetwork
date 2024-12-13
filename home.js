// Sample data for friends (In a real app, this would be dynamic from a database)
const users = [
    { id: 1, name: 'John Doe', post: 'This is John\'s post.', isFriend: true },
    { id: 2, name: 'Jane Smith', post: 'This is Jane\'s post.', isFriend: true },
    { id: 3, name: 'Alice Johnson', post: 'This is Alice\'s post.', isFriend: true },
    { id: 4, name: 'Bob Brown', post: 'This is Bob\'s post.', isFriend: true }
  ];
  
  // Array to store the user's posts
  let userPosts = [];
  
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
  
  // Function to render friends' posts in the home section
  function renderFriendsList() {
    const friendsListDiv = document.getElementById('friends-list');
    friendsListDiv.innerHTML = '';
  
    users.forEach(user => {
      if (user.isFriend) {
        const friendDiv = document.createElement('div');
        friendDiv.classList.add('friend');
  
        const friendName = document.createElement('h3');
        friendName.textContent = user.name;
  
        const friendPost = document.createElement('p');
        friendPost.textContent = user.post;
  
        friendDiv.appendChild(friendName);
        friendDiv.appendChild(friendPost);
        friendsListDiv.appendChild(friendDiv);
      }
    });
  }
  
  // Function to create a new post
  function createPost() {
    const newPostText = document.getElementById('new-post').value;
  
    if (newPostText.trim()) {
      userPosts.push(newPostText); // Add the post to the user's posts
      document.getElementById('new-post').value = ''; // Clear the input field
      alert('Post created successfully!');
  
      // Update the posts section
      renderUserPosts();
    } else {
      alert('Please write something before posting.');
    }
  }
  
  // Function to render user's own posts
  function renderUserPosts() {
    const userPostsDiv = document.getElementById('user-posts');
    userPostsDiv.innerHTML = '';
  
    userPosts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('user-post');
  
      const postContent = document.createElement('p');
      postContent.textContent = post;
  
      postDiv.appendChild(postContent);
      userPostsDiv.appendChild(postDiv);
    });
  }
  
  // Initially display the home section and render friends list
  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    renderFriendsList();
  });
  