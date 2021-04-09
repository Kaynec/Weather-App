import style from './css/style.css'
import {makeGrid} from './weatherbox'


const cityError = document.getElementById('cityError')
cityError.style.display='none'

// Api key = f6d6cc08ab7cfee861ea1216354fca10

const getWeatherInfo= async (location,unit)=>{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&APPID=f6d6cc08ab7cfee861ea1216354fca10`)
    const responseToJson=await response.json()
    return responseToJson
}

const button = document.getElementById('submitLocation')

button.addEventListener('click',(e)=>sendDataToDom(e))
button.addEventListener('touchend',(e)=>sendDataToDom(e))


const sendDataToDom= async (e)=>{
    const location = await getWeatherInfo(e.target.parentElement.previousElementSibling.value.toLowerCase(),'metric')
    await makeGrid(location)
}