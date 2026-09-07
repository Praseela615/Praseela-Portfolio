const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  themeBtn.textContent = light ? "☀" : "☾";
});

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements.name.value.trim();
  formMessage.textContent = `Thanks, ${name}! Your message is ready to send. Please email me directly at tamsepraseela@gmail.com.`;
  form.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
