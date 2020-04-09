import { useComputers } from "../computuer/computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useDepartments } from "../department/departmentProvider.js"
import { useLocations } from "../locations/locationProvider.js"


//getting a reference to a DOM element with a class of employeeContainer and storing it in a variable
const contentTarget = document.querySelector(".employeeContainer")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    
    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find( computer => computer.id === employeeObject.computerId )

            // Find the related department for the current employee
            const foundDepartment = departments.find( department => department.id === employeeObject.departmentId )

            // Find the related location for the current employee
            const foundLocation = locations.find( location => location.id === employeeObject.locationId )


            // antidebuggability bugbear bugaloo
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}