import React, { Component } from 'react';
import '../App.css';
import StudentAppDisplay from '../component/StudentAppDisplay';
import StudentApplyList from '../component/StudentApplyList';



class StudentApp extends Component {
    constructor(props){
        super(props)
        this.takeInpVal = this.takeInpVal.bind(this);
        this.submitApp = this.submitApp.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.updatePersonInfo = this.updatePersonInfo.bind(this);
        this.returnNewVal = this.returnNewVal.bind(this);
        this.deletePersonFromStorage = this.deletePersonFromStorage.bind(this);





        this.studentObj1 = {};
        this.inputNames = [];

        this.state = {
            personSeparator:'',
            personName:'',
            personEmail:'',
            personAge:'',
            personNum:'',
            personContactStyle:'',
            personEngLevel:'Beginner',
            personStartDate:'2018-03-11',
            personSkills:'',
            personPresentation:'',
            personFromHome:'false',
            show: false,
            isEditing:false
        }

    };

    takeInpVal(event){ 
        const {name, value} = event.target
        this.inputNames.push(name)
        console.log(name, value)
        this.setState({
            [name]: value,
        });
    };



    submitApp(event){ 
        event.preventDefault();    

        for(var prop in this.state){
        let studOb = this.studentObj1, thirdArg = {value: this.state[prop], enumerable:true}
        if(prop[0] === 'p') Object.defineProperty(studOb, prop, thirdArg)
        };

        var studLocalObj = localStorage.getItem("StudentInfo");
        if (studLocalObj === null) studLocalObj= [];
        else studLocalObj = JSON.parse(studLocalObj);

        studLocalObj.push(this.studentObj1);
        studLocalObj = JSON.stringify(studLocalObj);
        localStorage.setItem("StudentInfo", studLocalObj);


       this.inputNames.map(eachVal =>{ 
            if(this.child[eachVal].value !== undefined) {
            console.log('svaki:', this.child[eachVal])
            this.child[eachVal].value  = '';
            }
        })
    };




    handleClose() {
        this.setState({ show: false }); 
    }


    handleShow() {
        this.setState({ show: true });
    }


    updatePersonInfo(event){
        console.log('it\'s very clearly that its updated')
        const {name, value, placeholder} = event.target
        console.log('UPDEJTOVANO:', name)
        console.log('updejt', value, 'placehold', placeholder)

       let studentLocalStorageInfo = JSON.parse(localStorage.getItem('StudentInfo'))
       console.log('to je lokalno:', studentLocalStorageInfo);
      var newLoc = studentLocalStorageInfo.map((each, ind)=> {
         if(each.name === placeholder){

           return each.name = value;
         }
       })
       console.log('newLoc', newLoc)
       //localStorage.setItem('StudentInfo', JSON.stringify(newLoc))
    }


    returnNewVal(){
        this.setState({
            isEditing:false
        })
    };



    deletePersonFromStorage(event){
        const {name, value, placeholder} = event.target
        console.log(name, value, placeholder)
    }


      
    render(){
    return (
      <div id='bodyDiv'>
        <StudentAppDisplay {...this} ref={(node) => { this.child = node; }}/>
        <StudentApplyList  {...this} />
      </div>
    )
  }
};



export default StudentApp;
