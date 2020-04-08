export const Employee = (employeeObject, computerObject) => {
    return `
        <section class="employee">
            <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
            <div>${employeeObject.age} years old</div>
            <div>Computer for Employee: ${computerObject.year} ${computerObject.model}</div>
        </section>
    `
}