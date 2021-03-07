import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
const Header =() => {
    return(
        <>
            <div class="header">
                <div class="logo">
                <Link to="/">  <b> e!</b> </Link> 
                </div>
                <div class="aSectionn"> 
                    <span class="accountt" id="loginn"> login </span> 
                    <span class="accountt"> create on account </span>
                </div>
            </div>
        </>
    )
} 
  
export default Header;