import domElements from './domElements'

const dataFromApi = (() => {
    let convertedData = ''
    const neededInfo = {}
    const getNeededInfo = (data) => {
        const currentOfData = data.current
        const locationOfData = data.location
        neededInfo.cloud = currentOfData.cloud
        neededInfo.feelsLike = currentOfData.feelslike_c
        neededInfo.wind = currentOfData.wind_kph
        neededInfo.location = {}
        neededInfo.location.country = locationOfData.country
        neededInfo.location.name = locationOfData.name
        console.log(neededInfo);
    }

    async function getData(location) {
        const data = await fetch(`https:api.weatherapi.com/v1/current.json?key=fde9d000471240ee9d472224231104&q=${location}`, { mode: 'cors' })
        convertedData = await data.json()
        getNeededInfo(await convertedData)
    }
    return { getData, getNeededInfo, neededInfo }

})()
function triggerGetData(event) {
    dataFromApi.getData(domElements.inputLocation.value);
    event.preventDefault()
}
domElements.submitBtn.addEventListener('click', triggerGetData, false)