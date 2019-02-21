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

        const localStorageStudentInfoObj = JSON.parse(localStorage.getItem('studentData1'));
        console.log('local storage info studenataarray objekat:', localStorageStudentInfoObj);
        this.lenArr= []
        const storageArrLength  = JSON.parse(localStorage.getItem('arrLen')) || [];
        this.lenArr = storageArrLength;

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
            show: false
        }
    };

    takeInpVal(event){ //ovde se uzimaju vrednosti [name], value i stavljaju u state 
        const {name, value} = event.target
        console.log(name, value)
        this.setState({
            [name]: value,
        });
    };

    submitApp(event){  //submit funkcija, tu se pravi sve
        event.preventDefault();
        this.lenArr.push('submmited')
        localStorage.setItem('arrLen', JSON.stringify(this.lenArr)) //localStorage for checking number of submits
        console.log('lenArr:', this.lenArr, this.lenArr.length)

        let  studentsInfo1= [], studentsInfoNew= [],  studentObj =  {};      //studentObj

        for(var prop in this.state){
        if(prop[0] === 'p'){ //proverava ako je prop.charAt(0)  jednak sa p, sto znaci da se salje u local iz this.state samo propsvezano za info iz forme
         Object.defineProperty(studentObj, prop, {value: this.state[prop], enumerable:true})
        }
        }

        localStorage.setItem(`studentObj${this.lenArr.length ? this.lenArr.length : null}`, JSON.stringify(studentObj)) //ovde pravi new obj za svaki submit
        studentsInfo1.push(studentObj); //i salje ga ovde u Array.
        localStorage.setItem("studentData1", JSON.stringify(studentsInfo1)); //An Array, pushed obj in
        


        /* NEDOVRSENO ****** pokusavam dole da napravim, da na prvi FORM submit sacuva info o jednoj osobi i onda da 
        sacuva i za svaku sledecu osobu, trazili su da bude u array, a ja sam stavio u Array objekte sa informacijama.
        samo da provalim kako da tacno zovem dinamicno lepo varijable kao na liniji 59 gore.
        Sad imam objekte za svaki submit i to cuvam, ali SAMO je problemcic kako da ih ubacim te objekte unutar GLAVNOG array ili da budu
        svaki u svom Arrayu
        */
        if(this.lenArr > 0){
        localStorage.setItem("studentDataNew", JSON.stringify(studentsInfoNew)); //An Array, pushed obj in
        }
        /*NEDOVRSENO*************** */
        //posalji novo.
    };



    handleClose() {
        this.setState({ show: false }); //to je za bootstrap modal
    }
    
    handleShow() {
        this.setState({ show: true }); //same bootstrap modal
    }

      
    render(){
    return (
      <div id='bodyDiv'>
        <StudentAppDisplay  {...this}/>
        <StudentApplyList {...this} />
      </div>
    )
  }
};



export default StudentApp;
