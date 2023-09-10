let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar__links");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
