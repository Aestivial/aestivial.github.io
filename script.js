
if(!localStorage.getItem('loggedInUser')){
    window.location.href = 'sub/login.html';
  }      
  
  function handleEnter(event) {
    if (event.keyCode === 13) {
      const command = document.getElementById("command-input").value;
      if (pages.hasOwnProperty(command)) {
        window.location.href = pages[command];
      } else {
        document.getElementById("terminal-output").innerHTML = `<p>Error: Command not found: ${command}</p>`;
      }
    }
  }
  
  
  const pages = {
    'home': 'home.html',
    'about': 'about.html',
    'projects': 'projects.html',
    'contact': 'contact.html',
  }

  const command = document.getElementById("command-input");
if (command.value.length > 0) {
    command.classList.remove("blink");
}

command.addEventListener("focus", function() {
    command.classList.remove("blink");
});

command.addEventListener("input", function() {
    if (command.value.length === 0) {
        command.classList.add("blink");
    } else {
        command.classList.remove("blink");
    }
});
