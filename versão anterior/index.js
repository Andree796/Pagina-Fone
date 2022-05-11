const botaoMenu = document.querySelector('.menu');
const menu = document.querySelector('.ListaNavegacao');

botaoMenu.addEventListener('click', () =>{
    menu.classList.toggle('ListaAtiva')
})