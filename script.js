
console.log("script is runing...")

/***********************************  verification  ****************************************/
function validate(){
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    if(fname.value == ""){
        alert("Enter first name");
        return false;
    }
    else if(lname.value == ""){
        alert("Enter last name");
        return false;
    }
    else if(email.value == ""){
        alert("Enter email");
        return false;
    }
    else if(subject.value == ""){
        alert("write subject");
        return false;
    }
    else if(message.value == ""){
        alert("write message");
        return false;
    }
    else{
        return true;
    }
}

document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.side').classList.toggle('sidego');
    
})

/* ******************************* Dark Mode *********************************************/

var icon = document.getElementById("mode");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
}

/* ********************************** typed js *************************************** */

var typed = new Typed('.text', {
    strings: [' Computer Engineer',' Web designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ********************************** scroll reveal *************************************** */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 3000,
    delay: 300
});

ScrollReveal().reveal('.devinfo', { origin: 'top'});
ScrollReveal().reveal('.about-hobbies', { origin: 'top'});
ScrollReveal().reveal('.Education', { origin: 'top'});
ScrollReveal().reveal('.certificate', { origin: 'top'});
ScrollReveal().reveal('.project', { origin: 'top'});
ScrollReveal().reveal('.contact-main', { origin: 'top'});
ScrollReveal().reveal('.name', { origin: 'left'});