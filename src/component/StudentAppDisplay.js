import React, { Component } from 'react';
import '../App.css';

class StudentAppDisplay extends Component {

  render() {
    let func = this.props     //[1],  state = this.props[0];
    return (
      <div >
        <form id ='displayAppId'>

        <label> Name:</label>
        <input 
        name='personName' 
        type='text' 
        placeholder='Your name' 
        onChange = {func.takeInpVal}
        ref={(node) => { this.personName = node; }}
        required
        />


        <label> E-mail:</label>
        <input 
        name='personEmail' 
        type='email' 
        placeholder='Your email' 
        onChange = {func.takeInpVal}
        ref={(node) => { this.personEmail = node; }}

        required
        />

        <label> Age:</label>
        <input 
        name='personAge'  
        type='number' 
        placeholder='Your age' 
        onChange = {func.takeInpVal}
        ref={(node) => { this.personAge= node; }}

        required
        />

        <label> Phone Number:</label>
        <input 
        name='personNum'  
        type='text' 
        placeholder='Phone number' 
        onChange = {func.takeInpVal}
        ref={(node) => { this.personNum = node; }}
        required
        />


        <label id='specLab'> Preferred Way of Communication:
        <label id ='labRadio'>

        <label className='lblradio'> E-mail:
        <input 
        name='personContactStyle'  
        type='radio' 
        placeholder='email' 
        onChange = {func.takeInpVal}
        value= 'email'
        required
        />
    
        </label>
        <label className='lblradio' > Phone:
        <input 
        name='personContactStyle'  
        type='radio' 
        placeholder='Phone number' 
        onChange = {func.takeInpVal}
        value= 'phone number'
        required
        />

        </label>
        </label> 
        </label>


        <label> English Level:</label>
          <select name='personEngLevel' onChange = {func.takeInpVal}>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Pre-Intermediate'>Pre-Intermediate</option>
            <option value='Upper-Intermediate'>Upper-Intermediate</option>
            <option value='Proficient'>Proficient</option>
          </select>

        <label> Avialable to Start:</label>
        <input 
        name='personStartDate' 
        type='date'  
        defaultValue="2018-03-11"
        min="2018-01-01" 
        max="2018-12-31" 
        onChange = {func.takeInpVal}
        ref={(node) => { this.personStartDate = node; }}

        required
        />


        <label> Technical Skills and Courses:</label>
        <input 
        name='personSkills' 
        type='text' 
        placeholder='your skills/courses' 
        onChange = {func.takeInpVal}
        ref={(node) => { this.personSkills = node; }}

        />

        <label> Short Personal Presentation (e.g. reason for joining the program):</label>
        <textarea 
        name='personPresentation'   
        onChange = {func.takeInpVal} 
        rows='6'         
        placeholder='personal presentation'
        ref={(node) => { this.personPresentation = node; }}

        >
        </textarea>


        <label> Study from Home:
        <input 
        name='personFromHome' 
        type='checkbox'
        value='true'
        onChange = {func.takeInpVal}
        ref={(node) => { this.personFromHome = node; }}
        />

        </label>


        <button  onClick={func.submitApp} >Submit Application</button>
        </form>
      </div>
    );
  }
}

export default StudentAppDisplay;
