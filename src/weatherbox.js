import {load} from './loading' 
export {makeGrid}

const makeGrid = async (location)=>{
// Display The Error if No City Is Found
if (!location.weather) cityNotFound()
if (location.weather) load.loading()
document.querySelector('input').value=""

const response = await fetch(`http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`)
let imgSrc = await response.url

const ContextualFragment = await document.createRange().createContextualFragment(`<div id="grid">
<a href="#" id="close">Close</a>

<p style="color: aqua;" id="nameAndCountry">${location.name},${location.sys.country} 
<img src='https://www.countryflags.io/${location.sys.country}/flat/64.png'></img></p>

<div id="imageAndTemp"> 
  <p id="temp">${location.main.temp} &#8451</p>
  <img src="${imgSrc}" alt="">
</div>

<div id="weatherInfo">
  <p>Feels like: ${location.main.feels_like} &#8451  |   ${location.weather[0].description} </p>
  <p>Humidity: ${location.main.humidity} | Pressure: ${location.main.pressure}</p>
</div>

</div>`)

const grid = ContextualFragment.querySelector('#grid')
const close = await grid.querySelector('#close')


document.querySelector('#container').append(grid)

load.loaded()

grid.classList.add('new-box')

await close.addEventListener('click', () => {
  document.querySelector('#container').removeChild(grid)
})
// await close.addEventListener('touchend', () =>{
//   document.querySelector('#container').removeChild(grid)
// })
}

// Show Error if City can't Be Found
function cityNotFound() {
  const cityError = document.getElementById('cityError')
  cityError.style.display='block'
  document.querySelector('input').value=""
  setTimeout(() => {
    cityError.style.display='none'
  }, 2500);
}
