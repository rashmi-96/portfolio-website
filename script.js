const showMenu =(toggleID,navID)=>{
    const toggle = document.getElementById(toggleID)
    const nav = document.getElementById(navID);

    if(toggle && nav){
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
}
showMenu("toggle","nav-id");
//active and remove menu
const navLink = document.querySelectorAll(".nav-link");
const section = document.querySelectorAll(".section");

window.addEventListener("scroll", () =>{
    let current='';
    section.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= sectionTop - 390){
            current = section.getAttribute('id')
        }
    })

    navLink.forEach(navLink => {
        navLink.classList.remove('active');
        if(navLink.classList.contains(current)){
            navLink.classList.add('active')
        }
    })
})
 const navMenu = document.getElementById("nav-id");
  navLink.forEach((n) => n.addEventListener("click", ()=>{navMenu.classList.remove("show")}));

  function myFunction(){
    var element = document.body;
    element.classList.toggle('dark-mode')
  }

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



  

 