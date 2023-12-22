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
 

const tl = gsap.to(".page2",{

    scrollTrigger:{
        trigger:".dulhan img",
        scroller:"body",
       
        // markers:true,
        start: "top 75%",
        end: "bottum 20%",
        scrub:1, 
    },
    scale:1,
    opacity:1,
delay:1,
    rotate:0,
// duration:2,
})





