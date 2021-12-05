
functionality = {}

functionality.onSubmit = function(){
    console.log('hello')
    const formEl = document.querySelector('form')
    formEl.addEventListener('submit', function(event){
        event.preventDefault();
        console.log('hello from here')
    })
}

functionality.init = function(){
    functionality.onSubmit()
}

functionality.init()


