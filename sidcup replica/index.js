gsap.to(".nav",{
    backgroundColor:"#000",
    height: "120px",
    duration:0.5,
   scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"bottom -11%",
    scrub:1
   }
})


gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true
        start:"top -30vh",
        end:"top -80vh",
        scrub:2
    }
   
})
