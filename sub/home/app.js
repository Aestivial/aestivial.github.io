const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const sectionId = e.target.getAttribute("href");
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields");
    } else {
        alert("Form submitted!");
    }
});