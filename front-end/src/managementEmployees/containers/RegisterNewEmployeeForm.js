import React, { Component } from 'react'
import { PropTypes } from "prop-types";
import '../css/listEmployeesPage.scss'
import { connect } from 'react-redux'
import　{createEmployeeActions}　from '../actions/ListEmployeesActions'

class RegisterNewEmployeeForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fristName: '',
            lastName: '',
            emailId: '',
        }
        this.handleFristName = this.handleFristName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmailID = this.handleEmailID.bind(this);
        
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

    saveEmployee = (e) =>{
        e.preventDefault();
        let employee  = {
            fristName: this.state.fristName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
        }
        createEmployeeActions(employee).then(res => {
            this.props.history.push("/employees")
        })
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
                            <h3> Register New Employee</h3>
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

                                    <button className="btn btn-success save-button" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger cancel-button" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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
    null
)(RegisterNewEmployeeForm)