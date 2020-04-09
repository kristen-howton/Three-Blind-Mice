//empty array
let locations = []

export const useLocations = () => locations.slice()

export const getLocations = () => fetch("http://localhost:3000/location")
    //takes it from json and converts to JavaScript
    .then(response => response.json())
    //takes it and stores it in the empty array stored in line 1
    .then(response => locations = response)