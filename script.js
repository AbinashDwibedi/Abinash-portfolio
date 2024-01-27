let loadBox = document.querySelectorAll(".loader-boxs");
let loader = document.querySelector(".loader");
let loading = document.querySelector(".loading");
function randomColor() {
    let a = Math.ceil(0 + Math.random() * 255);
    let b = Math.ceil(0 + Math.random() * 255);
    let c = Math.ceil(0 + Math.random() * 255);
    return `rgb(${a},${b},${c})`
}
setTimeout(() => {
    loading.innerHTML = "Loading"
}, 1200);
setInterval(() => {
    Array.from(loadBox).forEach((a) => {
        a.style.background = randomColor();
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
        }, 3000);
    })
    prom.then(()=>{
        loader.remove();
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


