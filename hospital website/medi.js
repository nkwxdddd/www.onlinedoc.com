const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

// activating the menu to show off it is clicked

if (bar) {
  bar.addEventListener("click",() => {
    menu.classList.toggle("active");
  });
}