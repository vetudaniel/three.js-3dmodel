const navContainer = document.querySelector('.nav-container');
const hamburger = document.querySelector('.hamburger')
const bars = document.querySelectorAll('.toggle');


hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active')
    hamburger.classList.toggle('toggle')
    bars.forEach(bar => {
        bar.classList.toggle('toggle') 
    })
})