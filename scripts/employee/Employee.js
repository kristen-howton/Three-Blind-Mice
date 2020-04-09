export const Employee = (employeeObject, computerObject, employeeDepartment, employeeLocation) => {
    return `
        <article class="employee">
            <header class="employee__name">
                <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
            </header>
                <section class="employee__age">${employeeObject.age} years old</section>
                <section class="employee__computer">Computer for Employee: ${computerObject.year} ${computerObject.model}</section>
                <section class="employee__department">${employeeDepartment.department}</section>
                <section class="employee__location">${employeeLocation.location}</section>
        </article>
    `
}