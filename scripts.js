portfolioApp = {};

//adding an event listener on the form to send an email
// portfolioApp.onSubmit = function () {
//   const formEl = document.querySelector("form");
//   //adding an event listner to form so on submit it would call the function send email
//   formEl.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const name = document.querySelector(".fullName").value;
//     const email = document.querySelector(".email").value;
//     const message = document.querySelector(".message").value;
//     formEl.reset();
//     sendEmail(name, email, message);
//   });
// };

//sending email function
// function sendEmail(name, email, message) {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "paria340@gmail.com",
//     Password: "yfdydjldyyqxszhk",
//     To: "paria340@gmail.com",
//     From: "paria340@gmail.com",
//     Subject: `${name} sent you a message`,
//     Body: `Name ${name} Email: ${email} Message: ${message}`,
//   }).then((message) => {
//     const sendConfirm = document.querySelector(".sendConfirm");
//     const sendConfirmParagraph = document.createElement("p");
//     sendConfirmParagraph.innerHTML = "Email has been sent!";
//     sendConfirm.append(sendConfirmParagraph);
//   });
// }

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
  portfolioApp.onSubmit();
};

portfolioApp.init();
