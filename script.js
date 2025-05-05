// FAQ Toggle
document.querySelectorAll(".faqbox").forEach(box => {
  const answer = document.createElement("div");
  answer.classList.add("answer", "hidden");
  answer.innerHTML = `<p>This is a placeholder answer. You can customize this per question.</p>`;
  box.appendChild(answer);

  box.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    answer.classList.toggle("show");
  });
});

// Navbar Background on Scroll
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#111";
  } else {
    nav.style.backgroundColor = "transparent";
  }
});

// Email Validation
document.querySelector(".btn-red").addEventListener("click", () => {
  const email = document.querySelector("input[type='text']").value;
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you! We'll reach out soon.");
  }
});