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