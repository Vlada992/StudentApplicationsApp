import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class StudentApplyList extends Component {
  render() {
    let allP = this.props, displayList = [], displayList1 = [], localStorageStudentsInfo


    if(localStorage.getItem('StudentInfo') != null ){
        localStorageStudentsInfo = JSON.parse(localStorage.getItem('StudentInfo'));

        for(let i =0; i < localStorageStudentsInfo.length; i++){
        displayList.push( Object.keys(localStorageStudentsInfo[i]).map((val, ind) => {
        return (
        <React.Fragment>
        {val === 'personSeparator' ? 
        <><br></br>
        <h1>
          Person { localStorageStudentsInfo[i].personName.toUpperCase()}
        </h1>
        </>
         : null}

        <li key={ind}>
        {val}: <strong>{localStorageStudentsInfo[i][val]}</strong>&nbsp;

        <button onClick={allP.updatePersonInfo}>Update</button>
        <button onClick={allP.deletePersonFromStorage}>Delete</button>


        </li>
        {val === 'personFromHome' ? <br></br> : null}
        </React.Fragment>
        )
        })
        ) //pushed here.

        /******************************************************************* */

        displayList1.push( Object.keys(localStorageStudentsInfo[i]).map((val, ind) => {
        if(allP.state.isEditing){
          return (
            <React.Fragment>
            {val === 'personSeparator' ? 
            <><br></br>
            <h1>
              Person { localStorageStudentsInfo[i].personName.toUpperCase()}
            </h1>
            </>
             : null}
    
            <li key={ind}>
    
            {val}: <input name={val} onChange={allP.updatePersonInfo} placeholder={localStorageStudentsInfo[i][val]}/>
    
            <button onClick={allP.returnNewVal}>Update</button>
    
            </li>
            {val === 'personFromHome' ? <br></br> : null}
            </React.Fragment>
          )
       }
      })
      )




        /******************************************************************* */

        }  //for loop



        /* */
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
          {/*{displayList }*/}
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




/*

if(allP.state.isEditing){
            return (
              <React.Fragment>
              {val === 'personSeparator' ? 
              <><br></br>
              <h1>
                Person { localStorageStudentsInfo[i].personName.toUpperCase()}
              </h1>
              </>
               : null}
      
              <li key={ind}>
      
              {val}: <input name={val} onChange={allP.updatePersonInfo} placeholder={localStorageStudentsInfo[i][val]}/>
      
              <button onClick={returnNewVal}>Update</button>
      
              </li>
              {val === 'personFromHome' ? <br></br> : null}
              </React.Fragment>
            )
         }
*/