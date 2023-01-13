const users = {
    'username': 'password',
    'Admin9': 'Aestivial',
    'a': 'p',
    '':''
  };

  function handleEnter(event) {
    if (event.keyCode === 13) {
      handleLogin();
    }
  }
  
  
  function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (users.hasOwnProperty(username) && users[username] === password) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = '../index.html';
    } else {
      alert('Invalid credentials');
    }
  }
  
  // set the default text in the username and password fields
document.getElementById("username").placeholder = "username";
document.getElementById("password").placeholder = "password"; 