let hamburger = document.querySelector('.hamburger-menu');
console.log('hamburger');

const menuIcon = document.querySelector('.fa-bars');
console.log('icona');

const closeMenuIcon = document.querySelector('.fa-times');

menuIcon.addEventListener('click', function() {
    hamburger.classList.add('active');
    console.log('click');
})

closeMenuIcon.addEventListener('click', function() {
    hamburger.classList.remove('active');
})