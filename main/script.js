
if(!localStorage.getItem('loggedInUser')){
    window.location.href = '../index.html';
  }      
  
  function handleEnter(event) {
    if (event.keyCode === 13) {
      const command = document.getElementById("command-input").value;
  
      if (pages.hasOwnProperty(command)) {
        // Check if the command is "portfolio"
        if (command === "portfolio") {
          // Open the external website in a new tab
          window.open("https://aestivial.github.io/portfolio/", "_blank");
        } else {
          // Open the corresponding page in a new tab
          window.open(pages[command], "_blank");
        }
      } else {
        // Display error message for unknown commands
        document.getElementById("terminal-output").innerHTML = `<p>Error: Command not found: ${command}</p>`;
      }
    }
  }
  
  const pages = {
    'home': '../sub/home/home.html',
    'portfolio': '../sub/portfolio/index.html',
    'about': '../Old Site/Resume/resume.html',
    'projects': '../sub/projects.html',
    'contact': '../sub/contact/contact.html',
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
