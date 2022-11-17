
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {useContext} from 'react'
import {UserContext} from '../context/UserContext'

function Dashboard() {
  const {user, logout} = useContext(UserContext);

 return (
    <div class="page">
        
    <div class="sidebar"> 
        <img src="articles.jpg" alt=""/> 
        <a href="/"> <i class="fa-solid fa-house"></i>&emsp;  <p class="two"> Home Page </p>  </a>
        <a href="/contracts"> <i class="fa-solid fa-sheet-plastic"></i>&emsp;   <p clas="one">Contracts </p> &nbsp; &nbsp;</a>
    
        
    </div>
        
    <div class="buttons">
        <button  class="logout" onClick={logout}> <i class="fa-solid fa-unlock-keyhole"></i> Log Out </button>
        <button class="profile" ><i class="fa-regular fa-user"></i> Profile  </button> 
    
    </div>
    <div class="contracts-container">
        
    <div class="contract">
    <p>contract id </p>
    <p> associated company   </p>
    <p> contract Agent </p>
    <p> contract date  </p>
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
    </div>
    
  )
}

export default Dashboard




