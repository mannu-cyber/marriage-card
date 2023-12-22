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
        scrub:1, 
    },
    scale:0,
    opacity:0,
delay:1,
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
        scrub:1, 
        
    },
    scale:0,
    opacity:0,
delay:.5,
duration:1,
    rotate:0,
    x:300
// duration:2,
})





