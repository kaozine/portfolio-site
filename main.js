var typed= new Typed(".text", {
    strings:["Student" , "Frontend Developer" , "UX/UI Designer" , "UX Researcher"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});


// circle skill //////

document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach(elem => {
      var dots = elem.getAttribute("data-dots");
      var marked = elem.getAttribute("data-percent");
      var percent = Math.floor(dots * marked / 100);
      var points = "";
      var rotate = 360 / dots;
  
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }
  
      elem.innerHTML = points;
  
      const pointsMarked = elem.querySelectorAll('.points');
      pointsMarked.forEach((point, index) => {
        if (index < percent) {
          point.classList.add('marked');
        }
      });
    });
  });

// mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');


// ACTIVE MENU //////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


// STICKY NAVBAR //////
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})

// TOGGLE ICON NAVBAR //////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuIcon.onclick = ()=> {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}
