

  //scroll reveal animation//
  
  const animation = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,

  });
/*home page*/
  animation.reveal(".Intro-text",{});
  animation.reveal(".button-resume",{delay:100});
  animation.reveal(".social-conatiner",{delay:100});
  animation.reveal(".home-image",{interval:200});

  /*about*/
  animation.reveal(".about-title",{});
  animation.reveal(".about-img",{delay:100});
  animation.reveal(".about-text",{delay:100});
  /*animation.reveal(".skill-container",{delay:100});*/

  /*project*/
  animation.reveal(".project-title",{});

  
//send emails//
function sendEmails(){
    var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    }

    const serviceId = "service_jxzn4xy";
    const templateId = "template_oksmwdw";

    emailjs.send(serviceId,templateId,params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully! Thank you for your response..");
        }
    )
    .catch((err) => console.log(err));
}

function toggleMenu(){
    let x = document.getElementById("my-nav");
    if(x.className == "nav-bar"){
        x.className += "responsive";
    }else{
        x.className = "nav-bar";
    }
}

// skill section animation

//scroll to the top button
let topbutton = document.getElementById("top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  
//project tabs navigation

function tabFunction(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

 