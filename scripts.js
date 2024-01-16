portfolioApp = {};

//animation on ABOUT section picture using gsap library
portfolioApp.pictureAnime = function () {
  gsap.registerPlugin(ScrollTrigger);
  let revealContainers = document.querySelectorAll(".reveal");
  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset",
      },
    });
    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });
};

//burger menu in mobile design
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    let displayMenu = false;
    const menu = document.querySelector(".fa-bars");
    const menuOption = document.querySelector("header .wrapper");
    menu.addEventListener("click", function () {
      displayMenu = !displayMenu;
      if (displayMenu) {
        menuOption.classList.add("open");
      } else {
        menuOption.classList.remove("open");
      }
    });
    menuOption.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        displayMenu = !displayMenu;
        menuOption.classList.remove("open");
      }
    });
  }
};

portfolioApp.init = function () {
  portfolioApp.pictureAnime();
};

portfolioApp.init();
