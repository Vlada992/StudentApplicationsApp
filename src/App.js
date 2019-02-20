import React from 'react';
import './App.css';
import StudentApp from './container/StudentApp';
import StudentAppHeader from './component/StudentAppHeader';


function App(){
    return (
      <div id ='mainDiv'>
        <StudentAppHeader/>
        <StudentApp/>
      </div>
    );
}


export default App;
