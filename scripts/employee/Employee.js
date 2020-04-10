export const Employee = (employeeObject, computerObject, employeeDepartmentObject, employeeLocationObject, customerArray) => {
    return `
        <article class="employee">
            <header class="employee__name">
                <h2>${employeeObject.firstName} ${employeeObject.lastName}</h2>
            </header>
                <section class="employee__age">${employeeObject.age} years old</section>
                <section class="employee__computer">Computer for Employee: ${computerObject.year} ${computerObject.model}</section>
                <section class="employee__department">${employeeDepartmentObject.name}</section>
                <section class="employee__location">${employeeLocationObject.location}</section>
                <section class="employee__customer">
                    <ul>
                        ${customerArray.map(customer => `<li>${customer.name}</li>`).join("")}
                    </ul>
                </section>
        </article>
    `
}