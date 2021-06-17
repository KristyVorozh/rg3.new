var modal=document.getElementById("mymodal");
var btn=document.getElementById("button");
var btn1=document.getElementById("button1");
var btn2=document.getElementById("button2");
var btn3=document.getElementById("button3");
var btn4=document.getElementById("button4");
var btn5=document.getElementById("button5");
var btn6=document.getElementById("button6");
var btn7=document.getElementById("button7");
var btn8=document.getElementById("button8");
var btn9=document.getElementById("button9");
var close=document.getElementsByClassName("modal_close")[0];
btn.onclick=function(){
    modal.style.display="block";
}
btn1.onclick=function(){
    modal.style.display="block";
}
btn2.onclick=function(){
    modal.style.display="block";
}
btn3.onclick=function(){
    modal.style.display="block";
}
btn4.onclick=function(){
    modal.style.display="block";
}
btn5.onclick=function(){
    modal.style.display="block";
}
btn6.onclick=function(){
    modal.style.display="block";
}
btn7.onclick=function(){
    modal.style.display="block";
}
btn8.onclick=function(){
    modal.style.display="block";
}
btn9.onclick=function(){
    modal.style.display="block";
}
close.onclick=function(){
    modal.style.display="none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var stages=['Этап 1','Этап 2','Этап 3','Этап 4','Этап 5'];
var swiper1 = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (stages[index]) + '</span>';
        },
    },
    scrollbar: {
    el: ".swiper-scrollbar"
    }
    
});
var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
});

var swiper3 = new Swiper(".mySwiper3", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: -70,
    breakpoints: {
        1190: {
            slidesPerView: 2,
            spaceBetween: -70
          },
          1150: {
            slidesPerView: 2,
            spaceBetween: 10
          },
        790: {
            slidesPerView: 2,
            spaceBetween: 10
          },
        750: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10
          },
      }
});
let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
var yesblock=document.getElementById("yesvalid")
let inp=document.querySelector('#phone1');

document.querySelector('#valid_button').onclick=function (e) {
    e.preventDefault();
    if (!validate(reg, inp.value)) {
        notValid(inp);
    } else {
        valid(inp);
    }
}

function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp) {
    inp.classList.add('is-invalid');
}

function valid(inp) {
    inp.value="";
    inp.classList.remove('is-invalid');
}

let reg1 = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
var yesblock=document.getElementById("yesvalid")
let inp1=document.querySelector('#phone');
let reg2=/[A-Za-zA-Яа-яЁё]/;
let inp2=document.querySelector('#name');
let reg3=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inp3=document.querySelector('#email');
let inp4=document.querySelector('#checkbox');
let modalWindow=document.querySelector('.modal_content-flex')
let NewModalWindow=document.querySelector('.modeld')
var error=0;


document.querySelector('#modal_valid-button').onclick=function (e) {
    e.preventDefault();
    if (!validate(reg1, inp1.value)) {
        notValid(inp1);
        error++;
    } else {
        valid(inp1);
        error=0;
    }
    if (!validate(reg2, inp2.value)) {
        notValid(inp2);
        error++;
    } else {
        valid(inp2);
    }
    if (!validate(reg3, inp3.value)) {
        notValid(inp3);
        error++;
    } else {
        valid(inp3);
    }
    if(error===0){
        modalWindow.style.display="none";
        NewModalWindow.style.display="block";
        
        setTimeout(()=>(window.location.reload()),1000);
    }
}

function validate(regex1, inp1) {
    return regex1.test(inp1);
}

function notValid(inp1) {
    inp1.classList.add('is-invalid');
}

function valid(inp1) {
    inp1.value="";
    inp1.classList.remove('is-invalid');
}
function validate(regex2, inp2) {
    return regex2.test(inp2);
}

function notValid(inp2) {
    inp2.classList.add('is-invalid');
}

function valid(inp2) {
    inp2.value="";
    inp2.classList.remove('is-invalid');
}

function validate(regex3, inp3) {
    return regex3.test(inp3);
}

function notValid(inp3) {
    inp3.classList.add('is-invalid');
}

function valid(inp3) {
    inp3.value="";
    inp3.classList.remove('is-invalid');
}
var burger=document.getElementById("burger_menu");
var burger_btn=document.getElementById("btn_burger");

burger_btn.onclick=function(){
    burger.style.display="block";
}

window.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target == burger) {
        burger.style.display = "none";
    }
});

$("#phone1").mask("+7 (999) 999-9999");
$("#phone").mask("+7 (999) 999-9999");


