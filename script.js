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
  animation.reveal(".button",{delay:100});
  animation.reveal(".social-conatiner",{delay:100});
  animation.reveal(".home-image",{interval:200});

  /*about*/
  animation.reveal(".about-title",{});
  animation.reveal(".about-img",{delay:100});
  animation.reveal(".about-text",{delay:100});
  animation.reveal(".skill-container",{delay:100});

  /*project*/
  animation.reveal(".project-title",{});

  /*validation form*/

 const fname = document.getElementById('name');
 const email = document.getElementById('mail');
 const message= document.getElementById('message');
 const submit= document.getElementsByClassName('form-submit')[0];

 submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");
 })
 


 /* function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "amarathungayashodha@gmail.com",
        Password : "09706B794335BD1E386CDA2A8CC724D41FDE",
        To : 'rashmi.123yashodha@gmail.com',
        From : document.getElementById("mail").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}*/

  

 