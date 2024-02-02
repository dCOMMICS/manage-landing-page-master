let container = document.querySelector('.main-wrapper')
let section = container.querySelectorAll('section')
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:container,
        scrub:1,
        pin:true,
        start:"top top",
        end: "+=3400",
    },

})

.to(container ,{
    x:()=>
    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease:"none",
    duration:1
})

.to({}, {duration:1 / (section.length + 1)})