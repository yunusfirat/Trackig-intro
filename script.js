const hamburger = document.getElementById('hamburger');
const {body} = document;
hamburger.addEventListener('click', (e)=> {
    e.preventDefault();
    body.classList.toggle('show-nav');
    
})