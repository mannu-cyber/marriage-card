 const adioElemnt =document.querySelector("#audio");
 const btnElement = document.querySelector("#playBtn");

function togglePlayPause(){
if (adioElemnt.paused){
adioElemnt.play();
btnElement.innerHTML = "Stop"

}
else{
adioElemnt.pause() 
    btnElement.innerHTML = "Play"
}
}
 



gsap.from(".dulha",{

    scrollTrigger:{
        trigger:".dulhan img",
        scroller:"body",
       
        // markers:true,
        start: "top 90%",
        end: "bottum 50%",
        scrub:5, 
    },
    scale:0,
    opacity:0,
delay:2,
duration:1,
    rotate:0,
    x:-300,
// duration:2,
})

gsap.from(".dulhan",{

    scrollTrigger:{
        trigger:".dulhan img",
        scroller:"body",
       
        // markers:true,
        start: "top 90%",
        end: "bottum 50%",
        scrub:5, 
        
    },
    scale:0,
    opacity:0,
delay:.5,
duration:1,
    rotate:0,
    x:300
// duration:2,
})



gsap.from(".heart", {
    scrollTrigger:{
        trigger:".heart",
        scroller:"body",
scrub:5,
start:"top 220%",
end: "bottom 50%"
},

scale:0,
opacity:0,
duration:1,

rotate:260,

y:100,

})



gsap.from(".card", {
    scrollTrigger:{
trigger:".card",
scroller:"body",
scrub:4,

start:"top 70%",
end: "bottom 30%"
    },

    duration:1,
    rotateY:90,
opacity:0,
stagger:true

})





