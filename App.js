
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect, useState} from 'react'

import Body from './Body';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import Dashboard from './Dashboard';
import { Nav } from 'react-bootstrap';


const App=()=> {

    return(
        <BrowserRouter>
         <div className="card-full">
            
            <Header />
            <Body />
            
            
           
        </div>
        </BrowserRouter>
       
    )

}

export default App;
