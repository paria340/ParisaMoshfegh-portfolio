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

portfolioApp.handleFormSubmit = function () {
  const form = document.getElementById("contactForm");

  emailjs.init("xEhKgBNz5rcoTDgKo");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {
      fullName: formData.get("fullName"),
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    emailjs
      .send("service_jq8rt7j", "template_e06s9rw", data)
      .then(
        function () {
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          console.error("Failed to send the message:", error);
          alert("Failed to send the message. Please check the console for details.");
        }
      );
  });
};

portfolioApp.init = function () {
  portfolioApp.pictureAnime();
  portfolioApp.handleFormSubmit();
};

portfolioApp.init();
