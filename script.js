const colorSeed = document.getElementById("color-seed")
const colorMode = document.getElementById("color-mode")
const colorBtn = document.getElementById("color-btn")

colorBtn.addEventListener("click", function() {
    let chosenColorMode = colorMode.value
    let chosenColorSeed = colorSeed.value.substring(1)

    console.log(chosenColorMode)
    console.log(chosenColorSeed)
    
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColorSeed}&mode=${chosenColorMode}`, options)
        .then(res => res.json())
        .then(scheme => {
            let colorArr = scheme.colors
            let colorScheme = []
            document.getElementById("color-scheme-container").innerHTML = ""
            for (let color in colorArr) {
                // colorScheme.push(colorArr[color].hex.value)
                document.getElementById("color-scheme-container").innerHTML += `
                    <div class="container">
                        <div class="color-container" style="background-color:${colorArr[color].hex.value}"></div>
                        <p class="hex-text">${colorArr[color].hex.value}</p>
                    </div>
                `
            }

        })
})


