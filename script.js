let nav=document.querySelector('.navbar')
let icon=document.querySelector('#menu-btn')

icon.addEventListener('click',()=>{
    nav.classList.toggle('active')
})
const sr= ScrollReveal({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true

})
sr.reveal('.text',{delay:200,origin:'left'})
sr.reveal('.formcon form',{delay:200,origin:'left'})
sr.reveal('.heading',{delay:200,origin:'top'})
sr.reveal('.box',{delay:600,origin:'left'})
sr.reveal('.abot',{delay:400,origin:'right'})
sr.reveal('.newsletter .box',{delay:200,origin:'bottom'})




