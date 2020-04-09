import { useComputers } from "../computuer/computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"

//getting a reference to a DOM element with a class of employeeContainer and storing it in a variable
const contentTarget = document.querySelector(".employeeContainer")

//render is a function that has a parameter
const render = employeesToRender => {
    //store the value of the array of computers in a variable
    const computers = useComputers()

    //contentTarget is DOM element .innerHTML is a string property 
    contentTarget.innerHTML = employeesToRender.map(
        employeeObject => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                computer => {
                    return computer.id === employeeObject.computerId
                }
            )
            const foundDepartment = department.find(
                department => {
                    return department.id === departmentObject.departmentId
                }
            )
            const foundLocation = locations.find( 
                location => {
                    return location.id === employeeObject.locationId 
                }
            )
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation) 
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}