    const allLinks = document.querySelectorAll("nav a");allLinks.forEach(link => {
link.addEventListener("click", event => {
event.preventDefault();
allLinks.forEach(l => l.classList.remove("active"));
event.target.classList.add("active");
});
});
