const navContainer = document.querySelector('.nav-container');
const hamburger = document.querySelector('.hamburger')
const bars = document.querySelectorAll('.bar');


hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active')
    
    bars.forEach(bar => {
        bar.classList.toggle('toggle') 
    })
})