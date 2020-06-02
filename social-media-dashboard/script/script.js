const toggle = document.querySelector(".toggle_wrapper__label_toggle");

function handleToggle() {
  document.body.classList.toggle("dark");
}

toggle.addEventListener("click", handleToggle);
