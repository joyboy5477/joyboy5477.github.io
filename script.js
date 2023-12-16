function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: [ "welcome Everyone", "welcome to my creative realm"],
      typeSpeed: 100,
      loop: true,
    });
  });
