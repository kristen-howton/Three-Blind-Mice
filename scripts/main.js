import { getEmployees } from "./employee/employeeProvider.js"
import { getComputers } from "./computuer/computerProvider.js"
import { EmployeeList } from "./employee/EmployeeList.js"

getEmployees()
    .then(getComputers)
    .then(EmployeeList)
