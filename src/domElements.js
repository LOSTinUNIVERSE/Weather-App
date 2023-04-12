console.log('hi');
const domElements = (() => {
    const inputLocation = document.getElementById('inputLocation')
    const submitBtn = document.getElementById('submitBtn')
    const location = document.getElementById('location')
    const text = document.getElementById('text')
    const icon = document.getElementById('icon')
    const humidity = document.getElementById('humidity')
    const feelsLike = document.getElementById('feelsLike')
    const wind = document.getElementById('wind')
    return {
        inputLocation, submitBtn,
        location, text, icon, humidity, feelsLike, wind
    }
})()
export default domElements