"use strict";
// GSAP Init
const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
function init() {
  // Preloader Animation
  timeline.to(".fader", { opacity: 0, duration: 1 }, "+=.5");
  timeline.to(".fader", { display: "none", duration: 0.5 }, "-=1");
  // Chapter Text Animates
  timeline.to(".chapter", { opacity: 1, duration: 0.5 });
  // Main Text Animates
  timeline.to(".main-text", { opacity: 1, duration: 3 });
  timeline.to(".main-text", { "letter-spacing": "2.5rem", duration: 3 }, "-=3");
  timeline.to(".work", { opacity: 1, duration: 1 }); // Causes a warning as I use only one JS file, fix later.
  timeline.to(".social-media", { opacity: 1, duration: 1 }); // Causes a warning as I use only one JS file, fix later. Also causes a disturbance in animation sequence, fix!!!
  // Logo Animates
  timeline.to(
    ".logoMain",
    {
      opacity: 1,
      duration: 1,
    },
    "-=2"
  );
  timeline.to(
    ".quote",
    {
      opacity: 1,
      duration: 1,
    },
    "-=2"
  );
  timeline.to(
    ".navigation",
    {
      x: "0px",
      duration: 1,
    },
    "-=2"
  );
}
// Calling the first animation sequence
init();

// Custom Cursor
const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");
// able to be hovered by cursor
const hoverEl = document.querySelectorAll(".can-hovered");
hoverEl.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
// ----
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});
// Redirections
const prologue = document.querySelector("#prologue");
const firstPage = document.querySelector("#firstPage");
const secondPage = document.querySelector("#secondPage");
const epilogue = document.querySelector("#epilogue");

prologue.addEventListener("click", () => {
  gsap.to(".fader", { display: "flex", duration: 0.5 });
  gsap.to(".fader", { opacity: 1, duration: 2 });
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/index.html"; // Change the links in future !!
  }, 2000);
});
firstPage.addEventListener("click", () => {
  gsap.to(".fader", { display: "flex", duration: 0.5 });
  gsap.to(".fader", { opacity: 1, duration: 2 });
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/skills.html";
  }, 2000);
});
secondPage.addEventListener("click", () => {
  gsap.to(".fader", { display: "flex", duration: 0.5 });
  gsap.to(".fader", { opacity: 1, duration: 2 });
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/work.html";
  }, 2000);
});
epilogue.addEventListener("click", () => {
  gsap.to(".fader", { display: "flex", duration: 0.5 });
  gsap.to(".fader", { opacity: 1, duration: 2 });
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/info.html";
  }, 2000);
});

// Complete the JavaScript, organize files, finish up links and downloads
