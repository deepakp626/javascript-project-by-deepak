let nodeListEl = document.querySelectorAll(".box div input")
let resultEl = document.querySelector('.result')
let boxEl = document.getElementById("box")
let iconEl = document.querySelector(".icon i")

const generateShadow = () => {
    let hOffsetEl = document.getElementById('h-offset').value
    let vOffsetEl = document.getElementById('v-offset').value
    let blurEl = document.getElementById('blur').value
    let spreadEl = document.getElementById('spread').value
    let colorEl = document.getElementById('color').value
    console.log({ hOffsetEl, vOffsetEl, blurEl, spreadEl, colorEl })

    let color = `${colorEl} ${hOffsetEl}px ${vOffsetEl}px ${blurEl}px ${spreadEl}px`
    document.getElementById("box").style.boxShadow = color

    resultEl.innerHTML = `<h2>-moz-box-shadow: ${boxEl.style['boxShadow']}</h2>
            <h2>-webkit-box-shadow: ${boxEl.style['boxShadow']}</h2>
            <h2>box-shadow: ${boxEl.style['boxShadow']}</h2>`
}
generateShadow()

const copyCSS = () => {
    let copyShadow = resultEl.textContent
    console.log(copyShadow)
    try {
        window.navigator.clipboard.writeText(copyShadow)
    } catch (error) {
        console.log("error =>", error)
    }
}

iconEl.addEventListener("click", copyCSS)
nodeListEl.forEach((input) => {
    input.addEventListener('input', generateShadow)
})