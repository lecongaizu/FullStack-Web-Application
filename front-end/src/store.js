import { createStore, combineReducers, applyMiddleware } from "redux";

import EmployeeReducers  from '../src/managementEmployees/reducers/EmployeeReducers'
import thunk from 'redux-thunk';
const middlewareEnhancer = applyMiddleware(thunk)

const appReducers = () => {
    return combineReducers({
        employeesManagement: EmployeeReducers,
    })
}

const storeRedux = createStore(
    appReducers(),
    middlewareEnhancer,
    // applyMiddleware(thunk)
)

export default storeRedux;