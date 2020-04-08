import { useComputers } from "../computuer/computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"

//getting a reference to a DOM element with a class of employeeContainer and storing it in a variable
const contentTarget = document.querySelector(".employeeContainer")

const render = employeesToRender => {
    //store the value of the array of computers in a variable
    const computers = useComputers()

    contentTarget.innerHTML = employeesToRender.map(
        employeeObject => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                computer => {
                    return computer.id === employeeObject.computerId
                }
            )
            return Employee(employeeObject, foundComputer)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}