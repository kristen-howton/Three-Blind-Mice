let employeeCustomers = []

export const useEmployeeCustomers = () => {
    return employeeCustomers.slice()
}

export const getparsedEmployeeCustomers = () => {
    return fetch("http://localhost:3000/employeecustomers")
        .then(response => response.json())
        .then(parsedEmployeeCustomers => employeeCustomers = parsedEmployeeCustomers)
}