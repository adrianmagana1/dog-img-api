const selectEl = document.getElementById("breed-selector")
const imageEL = document.getElementById("dog-image")

async function setup() {
    const response = await fetch ("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()

    const breeds = Object.keys(data.message)

    for (const breed of breeds) {
        const optionEl = document.createElement("option")
        optionEl.textContent = breed
        optionEl.value = breed
        selectEl.appendChild(optionEl)
    }
    console.log(data)
}

setup()


selectEl.addEventListener("change", async () => {
    const selectedBreed = selectEl.value

    const response = await fetch("https://dog.ceo/api/breed/" + selectedBreed + "/images/random")
    const data = await response.json()

    const imageURL = data.message
    imageEL.src = imageURL

    console.log(selectedBreed)
})

