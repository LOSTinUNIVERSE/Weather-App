import domElements from './domElements'

const dataFromApi = (() => {
    let convertedData = ''
    const neededInfo = {}
    function populatePage() {
        domElements.location.textContent = `${neededInfo.location.country}, ${neededInfo.location.name}`
        domElements.text.textContent = `${neededInfo.condition.text}`
        domElements.feelsLike.textContent = `feels like: ${neededInfo.feelsLike}`
        domElements.wind.textContent = `wind speed: ${neededInfo.wind}`
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
        console.log(neededInfo);
        populatePage()
        // return neededInfo
    }

    async function getData(location) {
        const data = await fetch(`https:api.weatherapi.com/v1/current.json?key=fde9d000471240ee9d472224231104&q=${location}`, { mode: 'cors' })
        convertedData = await data.json()
        getNeededInfo(await convertedData)
        return convertedData
    }
    return { getData, getNeededInfo, neededInfo }

})()
function triggerGetData(event) {
    dataFromApi.getData(domElements.inputLocation.value)
    event.preventDefault()
}
domElements.submitBtn.addEventListener('click', triggerGetData, false)