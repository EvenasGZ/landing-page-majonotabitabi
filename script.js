function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu a");

  function changeActiveLink() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);
});
