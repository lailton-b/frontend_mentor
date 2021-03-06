/* Menu hamburger */

const menuHamburger = document.querySelector(".menu__hamburger");
const menuUl = document.querySelector(".menu__ul");
const body = document.querySelector("body");

menuHamburger.addEventListener("click", () => {
  menuUl.classList.toggle("open");
  body.classList.toggle("open");
});

/* Features tab navigation */

const featuresLi = document.querySelectorAll(".features__nav li");
const features = document.querySelectorAll(".features__feature");

function tabNavigation(index) {
  if (!event.target.classList.contains("active")) {
    featuresLi.forEach((li) => {
      li.classList.remove("active");
    });
    event.target.classList.add("active");

    features.forEach((feature) => {
      const dataFeature = feature.getAttribute("data-feature");
      if (dataFeature == index) {
        features.forEach((item) => {
          item.classList.remove("active");
          setTimeout(() => (item.style.display = "none"), 300);
        });
        feature.classList.add("active");
        setTimeout(() => (feature.style.display = "flex"), 300);
      }
    });
  }
}

featuresLi.forEach((li, index) => {
  li.addEventListener("click", () => tabNavigation(index));
});

/* Faq tab navigation */

const questions = document.querySelectorAll(".faq__question");

function handleQuestion() {
  this.classList.toggle("active");
}

questions.forEach((question) =>
  question.addEventListener("click", handleQuestion),
);

/* Email check validity */

const submit = document.querySelector("input[type='submit']");
const email = document.querySelector(".email");
const emailWrapper = document.querySelector(".email_wrapper");

function checkValidity() {
  event.preventDefault();
  emailWrapper.classList.remove("invalid");
  emailWrapper.classList.remove("valid");

  if (!email.checkValidity()) {
    emailWrapper.classList.add("invalid");
  } else {
    emailWrapper.classList.add("valid");
  }
}

function removeNote() {
  emailWrapper.classList.remove("invalid");
  emailWrapper.classList.remove("valid");
}

submit.addEventListener("click", checkValidity);
email.addEventListener("click", removeNote);
