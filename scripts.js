
functionality = {}


//adding an event listener on the form to send an email
functionality.onSubmit = function () {
    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.querySelector('.fullName').value
        const email = document.querySelector('.email').value
        const message = document.querySelector('.message').value
        formEl.reset()
        sendEmail(name, email, message)
    })
}

//sending email function 
function sendEmail(name, email, message) {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'paria340@gmail.com',
        Password: 'yfdydjldyyqxszhk',
        To: 'paria340@gmail.com',
        From: 'paria340@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name ${name} Email: ${email} Message: ${message}`
    }).then((message) => {
        const sendConfirm = document.querySelector('.sendConfirm')
        const sendConfirmParagraph = document.createElement('p')
        sendConfirmParagraph.innerHTML = 'Email has been sent!'
        sendConfirm.append(sendConfirmParagraph)
    })
}

//animation on ABOUT section picture using gsap library
functionality.pictureAnime = function () {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                toggleActions: "restart none none reset"
            }
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
        });
    });
}

//button to go to ABOUT section from home page
functionality.scroll = function () {
    const button = document.querySelector('.arrow')
    button.addEventListener('click', function () {
        window.scroll({ top: 1000, left: 0, behavior: 'smooth' });
        functionality.pictureAnime()
    });
}

//burger menu in mobile design
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        let displayMenu = false
        const menu = document.querySelector('.fa-bars')
        menu.addEventListener('click', function () {
            displayMenu = !displayMenu
            const menuOption = document.querySelector('header .wrapper')
            if(displayMenu){
                menuOption.classList.add('open')
            }else{
                menuOption.classList.remove('open')
            }
        })
    }
}

//animtion on work section 
function reveal() {
    let revealerpoint = 150;
    let revealers = document.querySelectorAll('.revealer');
    for (let i = 0; i < revealers.length; i++) {
        let windowheight = window.innerHeight;
        let revealertop = revealers[i].getBoundingClientRect().top;
        if (revealertop < windowheight - revealerpoint) {
            revealers[i].classList.add('active')
        } else {
            revealers[i].classList.remove('active')
        }
    }
}


//button to go to HOME(top of the) page
functionality.toTop = function () {
    const buttonEl = document.querySelector('.toTop')
    buttonEl.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    })
}


functionality.init = function () {
    functionality.onSubmit()
    functionality.scroll()
    functionality.pictureAnime()
    window.addEventListener('scroll', reveal)
    functionality.toTop()
    // functionality.burgerMenu()
}

functionality.init()


