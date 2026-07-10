//=========================
// Loader
//=========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},500);

});

//=========================
// Scroll To Top
//=========================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

//=========================
// FAQ Accordion
//=========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const btn = item.querySelector(".faq-question");

btn.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.querySelector(".faq-answer").style.display="none";

other.querySelector("i").className="fa-solid fa-plus";

}

});

const answer=item.querySelector(".faq-answer");

const icon=item.querySelector("i");

if(answer.style.display==="block"){

answer.style.display="none";

icon.className="fa-solid fa-plus";

}else{

answer.style.display="block";

icon.className="fa-solid fa-minus";

}

});

});

//=========================
// Active Navbar
//=========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});//=========================
// Mobile Menu
//=========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("show-menu");

});

}

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("show-menu");

});

});

//=========================
// Reveal Animation
//=========================

const revealItems = document.querySelectorAll(

".service-card,.why-card,.gallery-card,.review-card,.contact-card,.doctor-img,.doctor-content"

);

function revealElements(){

const windowHeight = window.innerHeight;

revealItems.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < windowHeight-120){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

}

revealItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(40px)";
item.style.transition=".8s ease";

});

window.addEventListener("scroll",revealElements);

revealElements();

//=========================
// Gallery Hover Effect
//=========================

const galleryCards=document.querySelectorAll(".gallery-card");

galleryCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

//=========================
// Auto Year
//=========================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

//=========================
// Smooth Scrolling
//=========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

}); 
