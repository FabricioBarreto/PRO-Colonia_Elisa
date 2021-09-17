const btn_menu = document.querySelector('.btn_menu');
const close = document.querySelector('.close')
let navigation = document.querySelector('.nav');

btn_menu.addEventListener('click', ()=>{
	navigation.classList.toggle('active')
});

close.addEventListener('click', ()=>{
	navigation.classList.toggle('active')
});