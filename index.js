const value = document.querySelector(".card--header_value")
const input = document.querySelector(".card--header_input")


const metersInFeet = document.querySelector(".card--main_meter_feet")
const litersInGallons = document.querySelector(".card--main_liters_gallons")
const kilogramsInPounds = document.querySelector(".card--main_kilograms_pounds")

input.addEventListener("input", () => {
    const toCalculate = input.value
    value.textContent = renderContent(toCalculate)
})

function renderContent(value) {
    const num = parseInt(value)
    if(isNaN(num)) {
        return "I am super smart, but i can only calculate numbers..."  
    }
    metersInFeet.textContent = calculate(num, "meter")
    litersInGallons.textContent = calculate(num, "liter")
    kilogramsInPounds.textContent = calculate(num, "kilo")
    return value
}

// use only units meter, liter or kilo
function calculate(value, unit) {
    const decimalPlaces = 3
    let text = ""
    switch(unit) {
        case "meter":
            text = `${value} meters = ${(value *  3.281).toFixed(decimalPlaces)} feet | ${value} feet = ${(value / 3.281).toFixed(decimalPlaces)} meters`
            break;
        case "liter":
            text = `${value} liters = ${(value *  0.264172).toFixed(decimalPlaces)} gallons | ${value} gallons = ${(value / 0.264172).toFixed(decimalPlaces)} liters`
            break;
        case "kilo":
            text = `${value} kilos = ${(value *  2.205).toFixed(decimalPlaces)} pounds | ${value} pounds = ${(value / 2.205).toFixed(decimalPlaces)} kilos`
            break;
        default:
            text = "ERROR! Wrong Unit!"
    }
    return text
}

