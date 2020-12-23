<<<<<<< HEAD
import React, { useState, Component} from 'react';
import { Link } from 'react-router-dom'

class ErrorModal extends Component {
  constructor(props) {
    super();
    this.state = {
      errorMessage: props.errorMessage,
      errorType: props.errorType,
      clicked: props.clicked
    }
  
  }


  render(){
=======
import React, { useState } from 'react';


const ErrorModal = props =>{

>>>>>>> c9a0fd1a2ef91681af3ed97d4806a5fc4fbf29d2
    return(
        <div className="container">
  {/* Button to Open the Modal */}
  {/* The Modal */}
  
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
        <Link to = {'/register'}>
          <button type="button" className="close"
          onClick = {this.state.clicked}>
          ×
          </button>
          </Link>
        </div>
        {/* Modal body */}
        <div className="modal-body">
          {this.state.errorMessage}
        </div>
        {/* Modal footer */}
        <div className="modal-footer">
        <Link to = {'/register'}>
          <button type="button" className="btn btn-danger"
          onClick = {this.state.clicked} >
          Close
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default ErrorModal;