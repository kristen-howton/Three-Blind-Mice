let customers = []

export const useCustomers = () => {
    return customers.slice()
}

export const getCustomers = () => {
    return fetch("http://localhost:3000/customers")
        .then(response => response.json())
        .then(parsedCustomers => customers = parsedCustomers)
}
