const value = document.querySelector(".card--header_value")
const input = document.querySelector(".card--header_input")

input.addEventListener("input", () => {
    value.textContent = input.value
})
