let container = document.querySelector(".carousel-track")
let btnl = document.querySelector("#btn-left")
let btnr = document.querySelector("#btn-right")
let moving = false

class Card{
    constructor(nome, desc, imgurl){
        this.nome = nome
        this.desc = desc
        this.imgurl = imgurl
    }

    buildComponent(){
        return `
            <div class="gallery-preview-card-container">
                <div class="gallery-preview-card">
                    <img src="${this.imgurl}" alt="">
                    <h2>${this.nome}</h2>
                    <p>${this.desc}</p>
                </div>
            </div>
        `
    }
}

let cardList = []

cardList.push(new Card("1", "Descricao do produto", ""))
cardList.push(new Card("2", "Descricao do produto", ""))
cardList.push(new Card("3", "Descricao do produto", ""))
cardList.push(new Card("4", "Descricao do produto", ""))
cardList.push(new Card("5", "Descricao do produto", ""))

btnl.addEventListener("click", moveLeft)
btnr.addEventListener("click", moveRight)

function render() {
    console.log(cardList)
    container.innerHTML = ""

    cardList.forEach(e => {
        container.innerHTML += e.buildComponent()
    })
}

function moveRight() {
    if(moving){return null}
    moving = true
    const card = container.children[0]
    const style = window.getComputedStyle(card)

    const cardWidth =
    card.offsetWidth +
    parseInt(style.marginLeft) +
    parseInt(style.marginRight)

    // anima para esquerda
    container.style.transform = `translateX(-${cardWidth}px)`

    setTimeout(() => {
        const first = cardList.shift()
        cardList.push(first)

        container.style.transition = "none"
        container.style.transform = "translateX(0)"

        render()
        moving = false

        // força reflow
        void container.offsetWidth

        container.style.transition = "transform 0.4s ease"
    }, 400)
}

function moveLeft() {
    if(moving){return null}
    moving = true
    const card = container.children[0]
    const style = window.getComputedStyle(card)

    const cardWidth =
    card.offsetWidth +
    parseInt(style.marginLeft) +
    parseInt(style.marginRight)

    const last = cardList.pop()
    cardList.unshift(last)

    container.style.transition = "none"
    container.style.transform = `translateX(-${cardWidth}px)`

    render()
    moving = false

    void container.offsetWidth

    container.style.transition = "transform 0.4s ease"
    container.style.transform = "translateX(0)"
}

render()

const hamburguer = document.querySelector("#hamburguer");
const nav = document.querySelector(".header-indent");

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active");
});