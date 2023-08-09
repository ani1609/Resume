import { useState, useEffect } from 'react';
import '../index.css';
import '../styles/Header.css';
import Alien from '../icons/alien2.png';


function Header() 
{
    
  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, []);

  return (

      <header>
        <h4>Hi, my name is </h4>
        <h1>Ankit Kr. Chowdhury.</h1>
        <h2>I build things for the web.</h2>
        <p>
          Enthusiastic student web developer with a keen interest in learning and applying front-end and back-end technologies. Dedicated to honing skills creating web solutions that captivate users solve real-world challenges.
        </p>
        <a href='mailto:rakesh856100@gmail.com'>Hire me!</a>
        {/*<div className='alien'>
          <img src={Alien} alt="upward arrow" />
        </div>} */}
        
      </header>
  );
}

export default Header;

