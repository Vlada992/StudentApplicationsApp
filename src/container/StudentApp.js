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

        this.changeVal= this.changeVal.bind(this);



        //localStorage.removeItem('StudentInfo');

        this.studentObj1 = {};
        this.inputNames = [];

        this.state = {
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
            isEditing:false,
            updateName:'',
            updateVal:'',
            updateNameUniq:''
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
        //event.preventDefault();    

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

       /*this.inputNames.map(eachVal =>{ 
            if(this.child[eachVal].value !== undefined) {
            this.child[eachVal].value  = '';
            }
        })*/
    };




    handleClose() {
        this.setState({ show: false }); 
    };


    handleShow() {
        this.setState({ show: true });
    };


    updatePersonInfo(event){
       this.setState({isEditing:true})
       const { name, value, placeholder} = event.target
       let studentLocalStorageInfo = JSON.parse(localStorage.getItem('StudentInfo'))

       studentLocalStorageInfo.map((each, ind, arr) => {
         if(each[name] === placeholder) each[name] = value; 
         return;
       });
       localStorage.setItem('StudentInfo', JSON.stringify(studentLocalStorageInfo))
    };


    changeVal(event){
        const { name, value, placeholder} = event.target
       // console.log('SVI ZAJEDNO', name, value)
        this.setState({
            isEditing:true,
            updateName:name,
            updateVal:value.length
        })
    };  

    returnNewVal(){
        this.setState({isEditing:false})
    };



    deletePersonFromStorage(event){
        const {name, value, placeholder} = event.target
        let studentLocalStorageInfo1 = JSON.parse(localStorage.getItem('StudentInfo'));

       studentLocalStorageInfo1.map((each, ind, arr) => {
         if(each[name] === value) return  studentLocalStorageInfo1.splice(ind, ind)
       })
       localStorage.setItem('StudentInfo', JSON.stringify(studentLocalStorageInfo1))
       this.setState({ isEditing:false})
    };


    render(){
    return (
      <div id='bodyDiv'>
        <StudentAppDisplay {...this} ref={(node) => { this.child = node; }}/>
        <StudentApplyList  {...this}  />/ 
      </div>
    )
  }
};



export default StudentApp;
