import axios from 'axios';
import { GET_EMPLOYEES, FAILED_EMPLOYEES } from '../reducers/EmployeeReducers';
const API_URL = "http://localhost:8080/api/v1/employees";


export function listEmployeesActions() {
    return (dispatch) => {
        return (fetch(API_URL))
            .then(res => res.json())
            .then(employee_list => {
                return (dispatch({ type: GET_EMPLOYEES, employee_list }))
            })
            .catch(err => dispatch({ type: FAILED_EMPLOYEES, err }))
    }
}

export const createEmployeeActions = (employee) => {
    return axios.post(API_URL, employee);
}

export const getEmployeeByid = (employeeId) => {
    return axios.get(API_URL + '/' + employeeId);
}

export const editEmployee = (employee, employeeId) => {
    return axios.put(API_URL + '/' + employeeId, employee);
}

export const deleteEmployee = (employeeId) => {
    return axios.delete(API_URL + '/' + employeeId);
}