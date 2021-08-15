import React, { Component } from 'react'
import '../css/listEmployeesPage.scss'
class FooterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

  render() {
    return (
        <div>
            <footer className = "footer">
                <span className="text-muted">All Rights Reserved 2021</span>
            </footer>
        </div>
    )
  }
}
export default FooterPage 