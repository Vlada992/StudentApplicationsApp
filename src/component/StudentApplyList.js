import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class StudentApplyList extends Component {
  render() {
    let allP = this.props, displayList, localStorageStudentsInfo;

    if(localStorage.getItem('studentData1') ){
        localStorageStudentsInfo = JSON.parse(localStorage.getItem('studentData1'));
        displayList = Object.keys(localStorageStudentsInfo[0]).map((val, ind)=> {
        return <li key={ind}>{val}: {localStorageStudentsInfo[0][val]}</li>
     });
    }
    //Ovo dole je uvezen Bootstrap Modal koji ce na click pokazivati informacije o aplikantima.
    //Sad samo jedan verovatno cu i tu da pravim neki map/each da vraca za svaki submit nov modal
    //za sad sve ide dobro osim toga sto ne znam kako da spojim dynamic name object i POSALJEM u Array za localStorage tamo u container/StudentApp.js
    return (
      <div>

      <Button id='modalbtn' variant="primary" onClick={allP.handleShow}>
          Launch demo modal
      </Button>

      <Modal show={allP.state.show} onHide={allP.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Applicant Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
          {displayList}
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={allP.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={allP.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default StudentApplyList;
