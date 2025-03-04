//Sticky  Header
window.addEventListener("scroll", function () {
    let nav = this.document.querySelector("#main_header")
    if (window.scrollY > 500) {
        nav.classList.add("fixed_header")
    }
    else{
        nav.classList.remove("fixed_header")
    }
})
//  ................................sideBar
function togglesidebar(){
    document.querySelector(".sidebar").classList.toggle("show")
}

function closeslidebar() {
    document.querySelector(".sidebar").classList.remove("show")
}
//....................................................Video Part .....
let isPlaying = false
function toggleVideo(){
    const iframe = document.getElementById("video_link");
    const thumbnail = document.querySelector(".thumbnail")

    if (!isPlaying) {
        iframe.src = "https://www.youtube.com/embed/p83CiZlwsFg?autoplay=1&start=${videoTime}";
        iframe.style.display="block";
        thumbnail.style.display="none";
    }
    else{
        iframe.src = "";
        iframe.style.display="none";
        thumbnail.style.display="block";
    }
    isPlaying = !isPlaying;
}

// counter Part Start
const counters = document.querySelectorAll(".counter");
let isCounterStarted = false;

// function formetNumber(num) {
//     if (num >= 1000000) {
//        return(nom / 1000000).toFixed(1)+"m+"
//     }
//     else if(num >= 1000 ){
//         return(num / 1000).toFixed(1)+"k+"
//     }
//     else{
//         num + '+'
//     }
// }

function startCounter() {
    if (isCounterStarted) return;
    isCounterStarted = true;

    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target"); 
        let count = 0;
        let speed = target / 100;

        function updateCount() {
            if (count < target) {
                count += speed;
                counter.innerText = Math.floor(count) + "+"; 
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+"; 
            }
        }

        counter.style.opacity = "1";
        counter.style.transform = "translateY(0)"; 
        updateCount();
    });
}
window.addEventListener("scroll", ()=>{
    let counterSection = document.querySelectorAll("counterBg");
    let position = counterSection.getBoundingClientRect().top
    let screenHeight = window.innerHeight
    

    if (position < screenHeight - 100 || position > screenHeight + 100) {
        startCounter()
    }
})
window.addEventListener("load", startCounter);




// counter Part End



// -------------------------------------------------------
// .................Back To Top Button
window.onscroll = function (){
let button = document.querySelector(".back_to_top");

if (window.scrollY > 120 || document.documentElement.scrollTop > 120 ) {
    button.style.display ="block"
}
else{
    button.style.display = "none"
}
};

function scrolToTop (){
    window.scrollTo({ top: 0, behavior:"smooth"});

}
// Back to top Button End 
// -------------------------------------------




