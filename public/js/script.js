const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

const btnFaq = document.querySelectorAll(".btn-faq");
const txtFaq = document.querySelectorAll(".faq-text");
btnFaq.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("rotate-45");
    button.classList.toggle("transition-transform");

    txtFaq.forEach((div, divIndex) => {

      if (divIndex === index) {
        div.classList.toggle("hidden");
        div.classList.toggle("flex");
        // Add the 'active' class to the clicked div
      }
    });
  });
});

