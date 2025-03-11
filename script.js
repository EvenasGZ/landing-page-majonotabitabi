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
    title: "Episode 1: Apprentice Witch Elaina",
    synopsis:
      "After reading 'The Adventures of Nike,' Elaina dreams of becoming a witch and traveling. She passes the exam, and all that's left to do is become an apprentice to another witch to become a full-fledged witch, but she is turned away by every witch. Finally, she decides to ask the suspicious 'Stardust Witch' to become her apprentice.",
    video: "https://www.youtube.com/embed/3zStBd6qVbw",
  },
  2: {
    title: "Episode 2: The Land of Witches",
    synopsis:
      "Elaina visits the land of wizards, but soon after arriving she has a head-on collision with a girl on a broomstick who comes hurtling towards her at high speed, causing a terrible day for her. The girl, Saya, begs Elaina to teach her the secrets of the witch apprenticeship exam.",
    video: "https://www.youtube.com/embed/6VWn0wsTFBQ",
  },
  3: {
    title: "Episode 3: A Girl as Graceful as a Flower / Happiness in a Bottle",
    synopsis:
      "During her journey, Elaina comes across a beautiful flower field, where a girl there entrusts her with a bouquet of flowers. The important thing is that the flowers are considered beautiful, so she asks that anyone to give it to the girl is fine. Elaina heads to a nearby country, but for some reason the gatekeeper stops her from entering the country.",
    video: "https://www.youtube.com/embed/JqNUNJCaT1g",
  },
  4: {
    title: "Episode 4: The Princess of the Land Without People",
    synopsis:
      "Arriving in the ruined country, Elaina meets a beautiful woman in the royal castle, the only place that had escaped destruction. Her true identity is Milarose, the kingdom's princess and witch, who has lost her memory. Elaina witnesses her battle against the giant monster that destroyed the country.",
    video: "https://www.youtube.com/embed/gidvc2yYKkY",
  },
  5: {
    title: "Episode 5: Royal Celesteria",
    synopsis:
      "With a certain book in hand, Elaina recalls a country where wizards are active that she visited six months ago. In the city, a student from the magic school suddenly asks Elaina if she will accompany him, but she refuses. After a fierce chase, she finds that it is none other than her master, Fran, waiting for her.",
    video: "https://www.youtube.com/embed/4CFzreaKIKU",
  },
  6: {
    title: "Episode 6: The Land of Honest People",
    synopsis:
      "A country of honesty - a country where people can no longer lie due to the power of a mysterious sword held by the king. At first glance, the town appears normal, but the residents are quiet and there is a desolate atmosphere. Curious about this town, Elaina decides to investigate the rules for lying. There, she is reunited with a witch.",
    video: "https://www.youtube.com/embed/dqzJw8Cic6k",
  },
  7: {
    title:
      "Episode 7: The Wall Engraved by a Traveler / The Grape-Stomping Girl",
    synopsis:
      "A story of two competing lands separated by people. Written in 'The Adventures of Nike,' two countries are divided by a wall and on bad terms. One day, an official consults with Nike, a traveler, about how he wants to brag about how wonderful the other side of the wall is. Nike begins to carve words of praise into the wall.",
    video: "https://www.youtube.com/embed/VFzC4vsXZdw",
  },
  8: {
    title: "Episode 8: The Ripper",
    synopsis:
      "In a country filled with dolls, Elaina comes across a witch from the Magic Control Association investigating the Ripper incident. Although Elaina had no intention of getting involved, she ends up becoming the next victim.",
    video: "https://www.youtube.com/embed/ekUB4Vb-k6A",
  },
  9: {
    title: "Episode 9: Lament that Flows Backward",
    synopsis:
      "Strapped for cash, Elaina is lured by sweet talk of making money and meets Estelle, the 'Scented Robe Witch.' She is trying to use magic to go back in time to change the unfortunate end of her best friend. The two rush to the town of 10 years ago to try to prevent the incident that would be the beginning of a tragedy.",
    video: "https://www.youtube.com/embed/BUCTotf9Goo",
  },
  10: {
    title: "Episode 10: Two Masters",
    synopsis:
      "Fran and Sheila go on a vacation together. Fran thinks back to the day when her master said he wanted to take on another apprentice, and to her time as an apprentice with Sheila, with whom she had a bitter relationship. It's a high-paying request from the Magic Control Association...",
    video: "https://www.youtube.com/embed/R5a7sKjDo4g",
  },
  11: {
    title: "Episode 11: Two Apprentices",
    synopsis:
      "While visiting the town of Knots, Elaina hides her true identity upon hearing news of the revival of 'Kotto-do,' a group of robbers who hate magicians. Meanwhile, Saya is reunited with her sister while on a job delivering a mysterious small box. Then, something strange happens to Elaina and Saya's bodies...",
    video: "https://www.youtube.com/embed/KXUfN-RgSBc",
  },
  12: {
    title: "Episode 12: Every Commonplace Story of the Ashen Witch",
    synopsis:
      "After passing through a gate bearing the words 'A country that will grant your wishes,' Elaina encounters another version of herself, this time wearing glasses, in a familiar castle. There are several Elainas, each with a different personality. What is Elaina's wish?",
    video: "https://www.youtube.com/embed/_dXJK2acUos",
  },
};

function changeEpisode(episodeNumber) {
  if (!episodes[episodeNumber]) {
    console.error("Episode not found");
    return;
  }

  const titleElement = document.querySelector(".text-synopsis h1");
  const synopsisElement = document.querySelector(".text-synopsis p");
  const videoFrame = document.getElementById("video-frame");

  titleElement.textContent = episodes[episodeNumber].title;
  synopsisElement.textContent = episodes[episodeNumber].synopsis;
  videoFrame.src = episodes[episodeNumber].video + "?t=" + new Date().getTime();

  document
    .querySelectorAll(".btn-synopsis p")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.btn-synopsis p:nth-child(${episodeNumber})`)
    .classList.add("active");
}
