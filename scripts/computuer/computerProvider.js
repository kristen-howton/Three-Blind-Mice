let computers = []

export const useComputers = () => computers.slice()

export const getComputers = () => fetch("http://localhost:3000/computers")
    .then(response => response.json())
    .then(response => computers = response)