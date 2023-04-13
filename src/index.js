import domElements from './domElements'
import './style.css'

const dataFromApi = (() => {
    let convertedData = ''
    const neededInfo = {}
    function populatePage() {
        domElements.location.textContent = `${neededInfo.location.country}, ${neededInfo.location.name}`
        domElements.text.textContent = `${neededInfo.condition.text}`
        domElements.feelsLike.textContent = `feels like: ${neededInfo.feelsLike} C`
        domElements.wind.textContent = `wind speed: ${neededInfo.wind}`
        domElements.humidity.textContent = `humidity : ${neededInfo.humidity}%`
        domElements.icon.src = neededInfo.condition.icon
    }

    const getNeededInfo = (data) => {
        console.log(data);
        const currentOfData = data.current
        const locationOfData = data.location
        neededInfo.condition = {}
        neededInfo.cloud = currentOfData.cloud
        neededInfo.condition.text = currentOfData.condition.text
        neededInfo.condition.icon = currentOfData.condition.icon
        neededInfo.feelsLike = currentOfData.feelslike_c
        neededInfo.wind = currentOfData.wind_kph
        neededInfo.location = {}
        neededInfo.location.country = locationOfData.country
        neededInfo.location.name = locationOfData.name
        neededInfo.humidity = currentOfData.humidity
        console.log(neededInfo);
        populatePage()
        // return neededInfo
    }

    async function getData(location) {
        try {
            const data = await fetch(`https:api.weatherapi.com/v1/current.json?key=fde9d000471240ee9d472224231104&q=${location}`, { mode: 'cors' })
            convertedData = await data.json()
            getNeededInfo(await convertedData)
        } catch { console.log('error'); }
    }
    return { getData, getNeededInfo, neededInfo }

})()
function triggerGetData(event) {
    dataFromApi.getData(domElements.inputLocation.value)
    document.getElementById('icon').style.display = 'block'
    event.preventDefault()
}
domElements.submitBtn.addEventListener('click', triggerGetData, false)