import style from './css/style.css'


const makeGrid = require('./weatherbox')
const cityError = document.getElementById('cityError')
cityError.style.display='none'



// Api key = f6d6cc08ab7cfee861ea1216354fca10

const getWeatherInfo= async (location,unit)=>{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&APPID=f6d6cc08ab7cfee861ea1216354fca10`)
    const responseToJson=await response.json()
    return responseToJson
    
}

const button = document.getElementById('submitLocation')

button.addEventListener('click', async (e)=> {
    const location = await getWeatherInfo(e.target.parentElement.previousElementSibling.value,'metric')
    await makeGrid(location)
    e.target.parentElement.previousElementSibling.value=''
})

