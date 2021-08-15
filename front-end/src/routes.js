import React, { Component } from 'react'
// import '../css/listEmployeesPage.scss'
import ListEmployeesPage from '../src/managementEmployees/pages/ListEmployeesPage'
import FooterPage from '../src/managementEmployees/containers/FooterPage'
import HeaderPage from '../src/managementEmployees/containers/HeaderPage'
import RegisterNewEmployeeForm from '../src/managementEmployees/containers/RegisterNewEmployeeForm'
import EditEmployeeForm from '../src/managementEmployees/containers/EditEmployeeForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class PathComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Router>
                    <div className='container'>
                        <HeaderPage />
                        <div className='container'>
                        <Switch>
                            {/* <Route　path="/" exact component={ListEmployeesPage}></Route> */}
                            <Route　path  ="/employees" component={ListEmployeesPage}></Route>
                            <Route　path  ="/add-employee" component={RegisterNewEmployeeForm}></Route>
                            <Route  path  = "/edit-employee/:id" component={EditEmployeeForm}></Route>
                        </Switch>
                        </div>
                        <FooterPage />
                    </div>
                </Router>
            </div>
        )
    }
}

export default PathComponent