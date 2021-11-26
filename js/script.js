const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
]

const imagesRight = document.querySelector(".thumbs");
const imagesLeft = document.querySelector(".main-img");


for (let i = 0; i < items.length; i++) {
    imagesRight.innerHTML += `<img src=${items[i]} alt="">`
    imagesLeft.innerHTML += `
    <div class="image-container"> 
        <img src=${items[i]} alt="">
        <div>
            <h1>${title[i]}</h1>
            <h2>${text[i]}</h2>
        </div>
    </div>
    `
}

const active = document.querySelectorAll(".main-img .image-container");
const bright = document.querySelectorAll(".thumbs img");

console.log(bright.classList);


active[0].classList.add("active", "first");
active[active.length - 1].classList.add("last")
bright[0].classList.add("bright", "first");
bright[bright.length - 1].classList.add("last")


const down = document.querySelector(".down");

down.addEventListener("click", function () {

    let falso = false;
    const brightBottom = document.querySelector(".thumbs img.bright");
    const activeBottom = document.querySelector(".main-img .image-container.active")

    for (let i = 0; i < bright.length; i++) {

        if (brightBottom.classList[i] == "last") {
            falso = true
        }
    }

    if (falso == false) {
        brightBottom.classList.remove("bright");
        brightBottom.nextElementSibling.classList.add("bright");

        activeBottom.classList.remove("active");
        activeBottom.nextElementSibling.classList.add("active");

    } else {
        active[0].classList.add("active");
        bright[0].classList.add("bright");
        active[active.length - 1].classList.remove("active");
        bright[bright.length - 1].classList.remove("bright");
    }
})


const up = document.querySelector(".up");

up.addEventListener("click", function () {

    let falso = false;
    const brightBottom = document.querySelector(".thumbs img.bright");
    const activeBottom = document.querySelector(".main-img .image-container.active");

    for (let i = 0; i < active.length; i++) {

        if (activeBottom.classList[i] == "first") {
            falso = true
        }
    }

    if (falso == false) {
        brightBottom.classList.remove("bright");
        brightBottom.previousElementSibling.classList.add("bright");

        activeBottom.classList.remove("active");
        activeBottom.previousElementSibling.classList.add("active");
    } else {
        active[0].classList.remove("active");
        bright[0].classList.remove("bright");
        active[active.length - 1].classList.add("active");
        bright[bright.length - 1].classList.add("bright");
    }


})