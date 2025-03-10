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

// Story
const episodes = {
  1: {
    title: "Episode 1: 魔女見習いイレイナ",
    synopsis:
      'After reading "The Adventures of Nike," Elaina dreams of becoming a witch and traveling. She passes the exam, and all that\'s left to do is become an apprentice to another witch to become a full-fledged witch, but she is turned away by every witch. Finally, she decides to ask the suspicious "Stardust Witch" to become her apprentice.',
    video: "https://www.youtube.com/embed/3zStBd6qVbw",
  },
  2: {
    title: "Episode 2: Perjalanan Baru",
    synopsis: "Ini adalah sinopsis untuk episode 2.",
    video: "https://www.youtube.com/embed/example2",
  },
  3: {
    title: "Episode 3: Petualangan Ajaib",
    synopsis: "Ini adalah sinopsis untuk episode 3.",
    video: "https://www.youtube.com/embed/example3",
  },
};
