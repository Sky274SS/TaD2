import React from 'react';
import './App.css';
import Basic_Screen from './components/Basic_Sreen/Basic_Screen';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from'./components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import Launch from "./components/Launch/Launch";



const App = () => {
  return (
      <BrowserRouter>
      <div className='app-wrapper'>
        <Basic_Screen />
        <NavBar />
        <div >
          <Route path='/Dialogs' component={Dialogs}/>
          <Route path='/Profile' component={Profile}/>
          <Route path='/Launch' component={Launch}/>
        </div>

      </div>
      </BrowserRouter>
  );
}


export default App;
