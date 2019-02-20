import React, { Component } from 'react';
import '../App.css';
import StudentAppDisplay from '../component/StudentAppDisplay';

class StudentApp extends Component {
    constructor(props){
        super(props)
        this.takeInpVal = this.takeInpVal.bind(this);
        this.submitApp = this.submitApp.bind(this);

        const localStorageStudentsInfo = JSON.parse(localStorage.getItem('studentsInfo'));
        console.log('local storage info studenata:', localStorageStudentsInfo);

        this.state = {
            personName:'',
            personEmail:'',
            personAge:'',
            personNum:'',
            personContactStyle:'',
            personEngLevel:'',
            personStartDate:'',
            personSkills:'',
            personPresentation:'',
            personFromHome:''
        }
    };

    takeInpVal(event){
        const {name, value} = event.target
        console.log(name, value)
        console.log('cekirano:', event.target.checked) //samo proveri i type da li je checkbox da ne bude zabune..ali i u state
        this.setState({
            [name]: value,
        });
    };

    submitApp(event){
        event.preventDefault()
        console.log(event.target, event)
        console.log('radi submit');
        console.log('state saa:', this.state)
        /*----*---*----*---**---*---**---**--**---*--**---**---*--* */
        let st = this.state, studentsInfo = [];

        for(var prop in this.state){
         studentsInfo.push(this.state[prop])
        }

        localStorage.setItem('studentsInfo', JSON.stringify(studentsInfo))

    };

    render(){
        /*const allProps = [this.state,{takeInpVal: this.takeInpVal,}];*/
    return (
      <div>
        <StudentAppDisplay {...this}
        />
      </div>
    )
  }



};



export default StudentApp;
