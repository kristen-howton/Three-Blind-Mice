//empty array
let locations = []

export const useLocations = () => locations.slice()

export const getLocations = () => fetch("http://localhost:3000/locations")
    //getting an array of JavaScript objects
    .then(response => response.json())
    //storing it in the locations array on line 2
    .then(response => locations = response)