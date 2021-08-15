import React, { Component } from 'react'
import '../css/listEmployeesPage.scss'
import { connect } from 'react-redux'
import　{listEmployeesActions}　from '../actions/ListEmployeesActions'

export const mapStateToProps = (state, ownProps) =>{
    let employees = state.employeesManagement.employee_list;
    return {
        employees,
    }
}

export const mapDispatchToProps = (
    dispatch,
) => {
    return {
        listEmployeesActions: () => {
          return dispatch(listEmployeesActions());
        }
    }
}

class ListEmployeesPage extends Component {

    constructor(props) {
        super(props)
        this.onClickAddNewEmployee = this.onClickAddNewEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.onClickReviewPerformance = this.onClickReviewPerformance.bind(this);
    }

    componentDidMount()
    {
        this.props.listEmployeesActions();
    }

    onClickAddNewEmployee() {
        this.props.history.push("/add-employee");
    }

    onClickReviewPerformance(){
        this.props.history.push("/reviews");
    }
    
    editEmployee(id) {
        this.props.history.push(`/edit-employee/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <button onClick={this.onClickAddNewEmployee} className="button-register-new-employee">Register New Employee </button>
                <div>
                        <table className="table-employee">
                            <thead>
                                <tr>
                                    <th>  ID </th>
                                    <th>  First Name</th>
                                    <th>  Last Name</th>
                                    <th>  Email Id</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.employees.map((employee, index) => {
                                        console.log("employee", employee);
                                        console.log("index", index);
                                       return ( 
                                        <tr key={index +1}>
                                        <td> {index +1} </td>
                                        <td> {employee.fristName} </td>   
                                        <td> {employee.lastName}</td>
                                        <td> {employee.emailId}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Edit Employee </button>
                                            {/* <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button> */}
                                            {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                        </td>
                                        </tr>
                                       ) 
                                    }
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            </div>

        )
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ListEmployeesPage)