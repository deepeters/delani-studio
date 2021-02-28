$(document).ready (() => {
    let myForm = $(myForm)
})

function validate (event){
    event.preventDefault ();
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
   // let output = `${name}; ${email} - ${message}`
}

if (name) == '' || email == '' || message == '') {
    name input addclass ('error')
    alert ('Error! All fields required')
    return false;
}
else {
    let response = `Hey ${name}. Your message has been received!`
    alert (response)
}