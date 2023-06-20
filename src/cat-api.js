const API_KEY = 'api_key=live_FmoyFNMFk66lp5FlkqDMo2DsUUF779eEfwbDSw2SDerzlMDn8v9p7wHPQp65RBcv';
const BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchCatByBreed = function (event) {
    console.log(event.target.value)
    return fetch(`${BASE_URL}/images/search?breed_ids=${event.target.value}&${API_KEY}`)
        .then(Response => {
            if (!Response.ok) {
            throw new Error(Response.statusText)
            }
           
           return Response.json();
        })
        
        
    .catch((err) => console.log(err))
};

export const fetchBreeds = function () {
    
    
       return fetch(`${BASE_URL}/breeds?${API_KEY}`)
        .then(Response => {
            if (!Response.ok) {
                throw new Error(Response.statusText)
            }
            
           return Response.json()
        
        })
           
    .catch((err) => console.log(err))
};
