import { getEmployees } from "./employee/employeeProvider.js"
import { getComputers } from "./computuer/computerProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"
import { getDepartments } from "./department/departmentProvider.js"

getEmployees()
    .then(getComputers)
    .then(getLocations)
    .then(getDepartments)
    .then(EmployeeList)


