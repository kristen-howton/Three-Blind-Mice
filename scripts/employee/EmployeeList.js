import { useComputers } from "../computuer/computerProvider.js"
import { useEmployees } from "./employeeProvider.js"
import { Employee } from "./Employee.js"
import { useDepartments } from "../department/departmentProvider.js"
import { useLocations } from "../locations/locationProvider.js"
import { useEmployeeCustomers } from "../customer/EmployeeCustomerProvider.js"
import { useCustomers } from "../customer/CustomerProvider.js"


//getting a reference to a DOM element with a class of employeeContainer and storing it in a variable
const contentTarget = document.querySelector(".employeeContainer")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const employeeCustomers = useEmployeeCustomers()
    const customers = useCustomers()
    
    contentTarget.innerHTML = employeesToRender.map(
        employeeObject => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(computer => computer.id === employeeObject.computerId)

            // Find the related department for the current employee
            const foundDepartment = departments.find(department => department.id === employeeObject.departmentId)

            // Find the related location for the current employee
            const foundLocation = locations.find(location => location.id === employeeObject.locationId)

            const matchingEmployeeCustomers = employeeCustomers.filter(employeeCustomer => employeeObject.id === employeeCustomer.employeeId)

            const foundCustomers = matchingEmployeeCustomers.map(
                employeeCustomer => {
                    const foundCustomer = customers.find(customer => customer.id === employeeCustomer.customerId)
                    return foundCustomer
                }) 

            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation, foundCustomers)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}