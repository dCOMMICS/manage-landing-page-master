let container = document.querySelector('.main-wrapper')
let tl = gsap.timeline({
    scrollTrigger:{
        trigger:container,
        scrub:1,
        pin:true,
        start:"top top",
        end: "+=1000",
    },

})

.to(container ,{
    x:()=>
    -(container.scrollWidth - document.documentElement.clientWidth) + "px",
    ease:"none",
    duration:1
})