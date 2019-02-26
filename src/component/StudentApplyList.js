import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';
import pen1 from "../images/penUpdate3.png";
import del1 from '../images/del1.png'




class StudentApplyList extends Component {
  render() {
    let allP = this.props, displayList = [], displayList1 = [], localStorageStudentsInfo, persName;

    
    if(localStorage.getItem('StudentInfo') != null ){
        localStorageStudentsInfo = JSON.parse(localStorage.getItem('StudentInfo'));

        for(let i =0; i < localStorageStudentsInfo.length; i++){
       persName  = localStorageStudentsInfo[i].personName.toUpperCase();
        // eslint-disable-next-line no-loop-func
        displayList.push( Object.keys(localStorageStudentsInfo[i]).map((val, ind) => {
          if(val[0] === 'p'){
        return (
        <React.Fragment>
        {val === 'personName' ?
        <h1>Person { persName} 
         <input type='image' value={localStorageStudentsInfo[i][val]} name={val} onClick={allP.deletePersonFromStorage} src={del1} />
        </h1> 
        : null }


        <li  key={ind}>
        <span>{val}:  <strong>{localStorageStudentsInfo[i][val]}</strong></span>
        &nbsp;<input type='image' className='btnDel' value={localStorageStudentsInfo[i][val]} name={val} onClick={allP.changeVal} src={pen1}  />
        </li>
        </React.Fragment>
        )
        } //if else state
        })
        ) //pushed here.

        // eslint-disable-next-line no-loop-func
        displayList1.push( Object.keys(localStorageStudentsInfo[i]).map((val, ind, arr) => {
        if(allP.state.isEditing && val[0] === 'p'  ){
          return (
            <React.Fragment>
            {val === 'personName' ? 
            <h1>Person { persName}
            <input type='image' value={localStorageStudentsInfo[i][val]} name={val} onClick={allP.deletePersonFromStorage} src={del1} />
            </h1> : null }

            <li key={ind + 1}>
            {val}:  {allP.state.updateName === val  ?  <input style={{width: `${allP.state.updateVal}0px` }} name={val}  onChange={allP.updatePersonInfo} placeholder={localStorageStudentsInfo[i][val]}/> :  <strong onClick={allP.changeVal}>{localStorageStudentsInfo[i][val]}</strong>}
            <button className='btnOnUpdate' onClick={allP.returnNewVal}>Update</button>
            </li>
            </React.Fragment>
          )
       } 
      })
      ) //pushed here
      }  //for loop
    }




    return (
      <div>
      <Button className='modalbtn' variant="primary" onClick={allP.handleShow}>
          See list of all applicants
      </Button>

      <Modal show={allP.state.show} onHide={allP.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Applicant Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
          {allP.state.isEditing ? displayList1 : displayList}
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



 /*<button className='btnDel' value={localStorageStudentsInfo[i][val]} name={val} onClick={allP.deletePersonFromStorage}>
         </button>*/


/* <button value={localStorageStudentsInfo[i][val]} name={val} onClick={allP.changeVal}></button>*/
