// const observerOptions = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.3,
// };

// function observerCallback(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // fade in observed elements that are in view
//       entry.target.classList.replace("fadeOut", "fadeIn");
//     } else {
//       // fade out observed elements that are not in view
//       entry.target.classList.replace("fadeIn", "fadeOut");
//     }
//   });
// }

// const observer = new IntersectionObserver(observerCallback, observerOptions);

// const fadeElms = document.querySelectorAll(".fader");
// fadeElms.forEach((el) => observer.observe(el));
var fadeElements = document.getElementsByClassName("scrollFade");

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add("scrollFade--visible");
      element.classList.add("scrollFade--animate");
      element.classList.remove("scrollFade--hidden");
    } else {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }
  }
}

document.addEventListener("scroll", scrollFade);
window.addEventListener("resize", scrollFade);
document.addEventListener("DOMContentLoaded", function () {
  scrollFade();
});
