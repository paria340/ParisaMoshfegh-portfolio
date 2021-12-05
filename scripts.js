
functionality = {}

functionality.onSubmit = function(){
    console.log('hello')
    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', function(event){
        event.preventDefault();
        let name = document.querySelector('.fullName').value
        let email = document.querySelector('.email').value
        let message = document.querySelector('.message')

        // formEl.reset()

        sendEmail(name, email, message)
    })
}

function sendEmail(name, email, message) {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'paria340@gmail.com',
        Password: 'yfdydjldyyqxszhk',
        To: 'paria340@gmail.com',
        From: 'paria340@gmail.com',
        Subject: `${name} sent you a message`,
        Body: `Name ${name} Email: ${email} Message: ${message}`
    }).then((message) => alert('the mail has been sent'))
}

functionality.init = function(){
    functionality.onSubmit()
}

functionality.init()


