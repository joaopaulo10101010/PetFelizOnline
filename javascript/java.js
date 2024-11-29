const carrossel = document.querySelector('.carrossel');
const imagens = document.querySelectorAll('.carrossel img');
const contador = document.getElementById("contador");

let indice = 0;

function teste()
{
    alert("funcionando");
}


function mostrarProximaImagem() 
{
    indice = (indice + 1) % imagens.length; 
    carrossel.style.transform = `translateX(${-indice * contador.width}px)`; 
}

setInterval(mostrarProximaImagem, 6000); 


const divs1 = document.querySelectorAll(".backgroundcolor1");
const divs2 = document.querySelectorAll(".backgroundcolor2");
const divs3 = document.querySelectorAll(".backgroundcolor3");
const divs4 = document.querySelectorAll(".backgroundcolor4");
const divs5 = document.querySelectorAll(".backgroundcolor5");

const divs1n = "noturnobackgroundcolor1";
const divs2n = "noturnobackgroundcolor2";
const divs3n = "noturnobackgroundcolor3";
const divs4n = "noturnobackgroundcolor4";
const divs5n = "noturnobackgroundcolor5";

function noturno()
{
    divs1.forEach(div => {div.classList.toggle(divs1n);});
    divs2.forEach(div => {div.classList.toggle(divs2n);});
    divs3.forEach(div => {div.classList.toggle(divs3n);});
    divs4.forEach(div => {div.classList.toggle(divs4n);});
    divs5.forEach(div => {div.classList.toggle(divs5n);});
}

const mapadogoogle = document.getElementById("mapadosite");

const mapa2 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2037104598226!2d-46.6963857!3d-23.632874599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50eee849aed9%3A0xf795d72fbb6fb01d!2sR.%20da%20Paz%2C%20789%20-%20Alto%20da%20Boa%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002327-060!5e0!3m2!1sen!2sbr!4v1732576225303!5m2!1sen!2sbr";
const mapa1 = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.5137606197263!2d-46.80943702455018!3d-23.441925657215467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefd6cc0d83ccf%3A0xe8c2c9d1b8163226!2sR.%20das%20Fl%C3%B4res%2C%20123%20-%20Vila%20dos%20Palmares%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2012345-678!5e0!3m2!1sen!2sbr!4v1732576602593!5m2!1sen!2sbr";

function mudarmapa()
{
   mapadogoogle.src = mapa2; 
}

