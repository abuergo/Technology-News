const button = document.querySelector('.menu-btn');

button.addEventListener('click', () => {
    const navBar = document.querySelector('.nav-main .nav-menu');
    navBar.classList.toggle('show'); 
})
