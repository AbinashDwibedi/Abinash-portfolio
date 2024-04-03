let loadBox = document.querySelectorAll(".loader-boxs");
let loader = document.querySelector(".loader");
let loading = document.querySelector(".loading");
// function randomColor() {
//     let a = Math.ceil(0 + Math.random() * 255);
//     let b = Math.ceil(0 + Math.random() * 255);
//     let c = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${a},${b},${c})`
// }
setTimeout(() => {
    loading.innerHTML = "Loading"
}, 1200);
setInterval(() => {
    Array.from(loadBox).forEach((a) => {
        a.style.background = "white";
    })
    if (loading.textContent.endsWith("...")) {
        loading.innerHTML = loading.innerHTML.slice(0, loading.innerHTML.length - 3)
    }
    else {
        loading.append(".");
    }
}, 1000)
document.addEventListener("DOMContentLoaded", () => {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            loader.style.opacity = 0
        }, 2000);
    })
    prom.then(()=>{
        loader.remove();
        let tm = gsap.timeline();
tm.from(".top-list,.sidebaropenlabel",{
    y : -100,
    duration:.5,
    stagger:.5
});
tm.from(".heading-logo",{
    opacity:0,
    x : -1000,
    rotateZ : "-560deg",
    duration:2,
})
tm.from(".heading-main,.webd,.heading-para",{
    opacity:0,
    y:100,
    duration:.5,
    stagger:.5,
})
tm.from(".head-links,.social",{
    opacity:0,
    y:100,
    duration:.5,
    stagger:.2,
})
    })
})
document.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    if(window.scrollY > 0){
        nav.classList.add("nav-color")

    }
    else{
        nav.classList.remove("nav-color")
    }
})
gsap.from(".left",{
    x:-1000,
    rotateZ:"15deg",
    duration:1,
    stagger:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".experiences",
        scroll:"body",
        start:"top 60%",end:"bottom 90%",
        scrub:true
    }
})
gsap.from(".right",{
    x:1000,
    rotateZ:"-15deg",
    stagger:1,
    duration:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".experiences",
        scroll:"body",
        start:"top 60%",end:"bottom 90%",
        scrub:true
    }
})
gsap.from(".project",{
    y:-100,
    x:-100,
    rotateZ:"15deg",
    duration:1,
    stagger:.5,
    opacity:0,
    scrollTrigger: {
        trigger: ".projec",
        scroll:"body",
        start:"top 60%",end:"bottom 90%",
        scrub:true
    }
})

