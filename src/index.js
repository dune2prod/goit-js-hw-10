// Прогноз погоды**********************************************************************************************************
// const search = document.querySelector('.js-search');
// const list = document.querySelector('.js-list');
// search.addEventListener('submit', onSearch);

// function onSearch(evt) {
//     evt.preventDefault()

//     const {query, days } = evt.currentTarget.elements
//     getWeather(query.value, days.value)
//         .then((data) => (list.innerHTML = createMarkup(data.forecast.forecastday)))
//         .catch((err) => console.log(err));
// }

// function getWeather(city, days) {
//     const BASE_URL = 'http://api.weatherapi.com/v1';
//     const API_KEY = '711f26cba4e74e7492673913231706';

//     return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
//         .then(resp => {
//             if (!resp.ok) {
//                 throw new Error(resp.statusText);
//             }
            
//             return resp.json()
//         });
// }


// function createMarkup(arr) {
    
//     return arr.map(({ date, day: { avgtemp_c, condition: { icon, text } } }) =>  `<li>
//     <img src="${icon}" alt="${text}">
//     <p>${text}</p>
//     <h2>${date}</h2>
//     <h3>${avgtemp_c}</h3>
//   </li>`).join('')
// }
// Котики*********************************************************************************************
import {fetchCatByBreed, fetchBreeds} from "./cat-api.js";



const catSelector = document.querySelector('.breed-select');
const catInfo = document.querySelector(".cat-info");


catSelector.addEventListener('change', onInputSelect);
function onInputSelect(event) {
    fetchCatByBreed(event)
        .then((data) => {
            // console.log(data[0].breeds[0]);
            // console.log(data[0].breeds[0].name);
            // console.log(data[0].breeds[0].description)
            // console.log(data[0].breeds[0].temperament)
            // console.log(data[0].url)
            createCatCardMarkup(data)
        })
};

function createCatCardMarkup(data) {
    const { name, description, temperament } = data[0].breeds[0];
    const image = data[0].url;
   
        catInfo.innerHTML = `<div>
        <h2>${name}</h2>
        <img src="${image}" alt="Cat Pic" width = 500>
        <p>${description}</p>
        <p>${temperament}</p>
</div>`
        

    
}

function createCatlistMarkup(arr) {
    const markup = [];
     arr.map(({ id, name }) => {
        markup.push(`<option value="${id}">${name}</option>`)
          
     })
       catSelector.innerHTML = markup.join()
};

// createCatCardMarkup()
fetchBreeds()
.then(data => createCatlistMarkup(data))