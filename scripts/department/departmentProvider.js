let departments = []

export const useDepartments = () => {
    return departments.slice()
}

export const getDepartments = () => {
    return fetch("http://localhost:3000/department")
        .then(response => response.json())
        .then(
            (parsedDepartments) => {
                departments = parsedDepartments
            }
        )
}