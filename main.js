const navContainer = document.querySelector('.nav-container');
const hamburger = document.querySelector('.hamburger')
const bars = document.querySelectorAll('.bar');
const closeHamburgerMenu = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay')




hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active')
    hamburger.style.display = 'none'
    overlay.classList.toggle('active')
})

closeHamburgerMenu.addEventListener('click',  () =>{
    navContainer.classList.toggle('active') 
    hamburger.style.display = 'block'
    overlay.classList.toggle('active')
})
