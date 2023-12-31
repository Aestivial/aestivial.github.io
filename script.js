const output = document.querySelector(".output");
const input = document.querySelector(".input");
const animationElement = document.querySelector(".animation");

input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const command = input.value;
        input.value = "";

        if (command.startsWith("-")) {
            const userQuery = command.substring(5).trim();
            const response = await fetchReplikaResponse(userQuery);
            output.innerHTML += `<p>${response}</p>`;
        } else if (command === "help") {
            output.innerHTML += "<p>Available commands: help, portfolio, about, contact</p>";
        } else if (command === "portfolio") {
            window.location.href = "https://aestivial.github.io/portfolio/";
        } else if (command === "about") {
            output.innerHTML += "<p>This is a remote terminal of Aestivial's machine.</p>";
        } else if (command === "contact") {
            output.innerHTML += "<p>You can reach Nayan at theaestivial@gmail.com</p>";
        }else {
            output.innerHTML += `<p>${command}: command not found</p>`;
        }

        // Automatically scroll to the bottom when new output is added
        output.scrollTop = output.scrollHeight;
    }
});


// Set up animations
const animationScripts = [
    "anim/phase-1.sh",
    "anim/phase-2.sh",
    "anim/phase-3.sh",
    "anim/phase-4.sh",
    "anim/file.sh",
    "anim/phase-5.sh",
    "anim/phase-6.sh"
];
let currentAnimationIndex = 0;
// ... (previous JavaScript) ...

function typeAnimation(lines, index) {
    if (index >= lines.length) {
        setTimeout(() => {
            animationElement.style.opacity = 0;
            currentAnimationIndex++;
            playNextAnimation();
        }, 5000); // Delay before starting the next animation
        return;
    }

    const currentText = lines.slice(0, index + 1).join("\n");
    animationElement.textContent = currentText;

    setTimeout(() => {
        typeAnimation(lines, index + 1);
    }, 100); // Adjust typing speed
}

function playNextAnimation() {
    if (currentAnimationIndex >= animationScripts.length) {
        currentAnimationIndex = 0;
    }

    fetch(animationScripts[currentAnimationIndex])
    .then(response => response.text())
    .then(scriptContent => {
      animationElement.style.opacity = 1; /* Set opacity to 1 before typing */
      const lines = scriptContent.split("\n");
      typeAnimation(lines, 0);
      output.textContent = `{user_admin} with {ip_address} Logged !n succ3ssfully.\nThis is a remote term1nal of Aestivial's mach!ne. Session timeouts locked @5000ms. Try: help`;
    });
}

playNextAnimation();
