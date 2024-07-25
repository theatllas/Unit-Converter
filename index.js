const inputEl = document.getElementById('input-number');
const lengthEl = document.getElementById('length');
const volumeEl = document.getElementById('volume');
const massEl = document.getElementById('mass');
const convertBtn = document.getElementById('convert-btn');
const lengthMileEl = document.getElementById('length-mile')

console.log('hello');

convertBtn.addEventListener("click", function() {
    const userNumber = inputEl.value
    let feetParam = Round(userNumber * 3.281)
    let meterParam = Round(userNumber / 3.281)

    let gallonParam = Round(userNumber * 0.264)
    let literParam = Round(userNumber / 0.264)

    let poundParam = Round(userNumber * 2.204)
    let kilogramParam = Round(userNumber / 2.204)

    let mileParam = Round(userNumber * 0.621)
    let kilometerParam = Round(userNumber / 0.621)

    

    lengthEl.innerHTML = `${userNumber} meters = ${feetParam} feet | ${userNumber} feet = ${meterParam} meters`
    volumeEl.innerHTML = `${userNumber} liter = ${gallonParam} gallon | ${userNumber} gallon = ${literParam} liter`
    massEl.innerHTML = `${userNumber} kilogram = ${poundParam} pound | ${userNumber} pound = ${kilogramParam} kilogram`
    lengthMileEl.innerHTML = `${userNumber} kilometer = ${mileParam} miles | ${userNumber} miles = ${kilometerParam} kilometer`

})

function Round(number) {
    return number.toFixed(3)
}

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/




