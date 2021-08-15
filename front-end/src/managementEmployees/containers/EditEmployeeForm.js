import React, { Component } from 'react'
import { PropTypes } from "prop-types";
import '../css/listEmployeesPage.scss'
import { connect } from 'react-redux'
import　{listEmployeesActions, getEmployeeByid, editEmployee, deleteEmployee}　from '../actions/ListEmployeesActions'


export const mapDispatchToProps = (
    dispatch,
) => {
    return {
        listEmployeesActions: () => {
          return dispatch(listEmployeesActions());
        }
    }
}

class EditEmployeeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            fristName: '',
            lastName: '',
            emailId: '',
        }
        this.handleFristName = this.handleFristName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmailID = this.handleEmailID.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        
    }

    handleFristName = (event) => {
        this.setState({
            fristName: event.target.value
        });
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    handleEmailID = (event) => {
        this.setState({
            emailId: event.target.value
        });
    }

    componentDidMount(){
        getEmployeeByid(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                fristName: employee.fristName,
                lastName: employee.lastName,
                emailId: employee.emailId,
            })
        })

    }

    editEmployee = (e) =>{
        e.preventDefault();
        let employee  = {
            fristName: this.state.fristName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
        }
        editEmployee(employee, this.state.id).then((res) => {
            this.props.history.push("/employees");
        })
        
    }

    deleteEmployee(id){
        deleteEmployee(id).then((res) => {
            this.props.ListEmployeesActions();
        })
        this.props.history.push("/employees");
    }

    cancel(){
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>  
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                            <h3> Edit Employee</h3>
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.fristName} onChange={this.handleFristName} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.handleLastName} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.handleEmailID} />
                                    </div>

                                    <button className="btn btn-success save-button" onClick={this.editEmployee}>Save</button>
                                    <button className="btn btn-danger cancel-button" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(this.state.id)} className="btn btn-danger delete-button">Delete </button>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect (
    null,
    mapDispatchToProps
)(EditEmployeeForm)