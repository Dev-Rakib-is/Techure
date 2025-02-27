//Sticky  Header
window.addEventListener("scroll", function () {
    let nav = this.document.querySelector("#main_header")
    if (window.scrollY > 300) {
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
// Counter Part
