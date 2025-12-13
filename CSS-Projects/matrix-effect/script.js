const para = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

let iteration = 0

para.addEventListener("mouseenter", () => {

    function randomtext() {
        const str = text.split('').map((char, index) => {
            if (index < iteration) {
                return char
            }
            return characters.split("")[Math.floor(Math.random() * characters.length)]
        }).join("")
        para.innerText = str
        iteration += 0.2
    }
    setInterval(randomtext, 30)
})