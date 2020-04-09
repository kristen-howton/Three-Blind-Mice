//empty array
let employees = []

export const useEmployees = () => employees.slice()

export const getEmployees = () => fetch("http://localhost:3000/employees")
    //getting an array of JavaScript objects
    .then(response => response.json())
    //storing it in the employees array on line 2
    .then(response => employees = response)