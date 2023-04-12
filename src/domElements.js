console.log('hi');
const domElements = (() => {
    const inputLocation = document.getElementById('inputLocation')
    const submitBtn = document.getElementById('submitBtn')
    return { inputLocation, submitBtn }
})()
export default domElements