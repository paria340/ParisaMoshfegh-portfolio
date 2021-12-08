
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

//button to go to ABOUT section from home page
functionality.scroll = function () {
    const button = document.querySelector('.arrow')
    button.addEventListener('click', function () {
        window.scroll({top: 1000, left: 0, behavior: 'smooth'});
        functionality.paragraphAnimation()
    });
}

//animation on ABOUT section
functionality.paragraphAnimation = function () {
    let text = document.getElementById('text');
    let newDom = '';
    const animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }
    text.innerHTML = newDom;
    let length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }

}


//burger menu in mobile design
// functionality.burgerMenu = function() {
//     const menu = document.querySelector('.fa-ellipsis-h')
//     menu.addEventListener('click', function () {
//         const li = document.querySelector('.wrapper div')
//         li.style.display = ('inherit')
//     })
// }

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
functionality.toTop = function() {
    const buttonEl = document.querySelector('.toTop')
    buttonEl.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: "smooth"});
    })
}


functionality.init = function () {
    functionality.onSubmit()
    functionality.scroll()
    functionality.paragraphAnimation()
    window.addEventListener('scroll', reveal)
    functionality.toTop()
    functionality.burgerMenu()
}

functionality.init()


