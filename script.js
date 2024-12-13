const wrapper= document.querySelector('.wrapper');
const registerLink= document.querySelector('.register-link');
const loginLink= document.querySelector('.login-link');
const buttonPopup=document.querySelector('.btn-popup');
const closeIcon=document.querySelector('.close-icon');
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});
buttonPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
closeIcon.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});


