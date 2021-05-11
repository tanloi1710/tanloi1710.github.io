const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.phone-nav');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('nav');

const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", ()=>{
    if(navLeft < 0){
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", ()=>{
    if(navLeft < 0){
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});
// Fix nav

const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", ()=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add("fix-nav");
    } else{
        navBar.classList.remove("fix-nav");
    }
});



// Cart script

const minus = document.getElementsByClassName('minus-btn');
const add = document.getElementsByClassName('plus-btn');
// Add value
for(var i = 0; i < minus.length;i++){
    var button = minus[i];
    button.addEventListener("click", (e)=>{
        var buttonClicked = e.target.parentElement;
        var input = buttonClicked.parentElement.children[1];
        input.stepDown();
    });
};
// Minus value
for(var i = 0; i < add.length;i++){
    var button = add[i];
    button.addEventListener("click", (e)=>{
        var buttonClicked = e.target.parentElement;
        var input = buttonClicked.parentElement.children[1];
        input.stepUp();
    });
};
// Scroll top button
var scroll_item = document.querySelector('.scroll-top');

scroll_item.addEventListener("click", ()=>{
    window.location.href = "#home";
});

window.addEventListener("scroll", ()=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        scroll_item.classList.remove("hide");
    } else{
        scroll_item.classList.add("hide");
    };
});