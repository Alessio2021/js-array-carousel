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

const slider = document.querySelector(".slider");
const mainImg = document.querySelector(".main-img");

// inserisco foto in html
for (let index = 0; index < items.length; index++) {
    let image = `<img src="${items[index]}" alt="">`
    // console.log(items[index]);
    mainImg.innerHTML += image;
}

// assegno classe active per display block
const img = document.querySelectorAll("img");
img[0].classList.add("active");

const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
// assegno al bottone il cambio foto

arrowUp.addEventListener('click', function () {
    const activeImg = document.querySelector(".active");
    // rimuovo l active e lo riassegno alla foto successiva
    const next = activeImg.nextElementSibling;
    activeImg.classList.remove("active");
    activeImg.classList.add("active");

}
