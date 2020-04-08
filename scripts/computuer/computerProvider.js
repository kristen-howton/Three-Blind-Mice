let computers = []

export const useComputers = () => computers.slice()

export const getComputers = () => fetch("http://localhost:3000/computers")
    //takes it from json and converts to JavaScript
    .then(response => response.json())
    //takes it and stores it in the empty array stored in line 1
    .then(response => computers = response)