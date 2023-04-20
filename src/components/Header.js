import { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() 
{
    const [shouldRender, setShouldRender] = useState(false);
    
    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

  return (
    <div>
      {/* <div className='empty'></div> */}
      <header>
        {shouldRender&&<h4 className='greeting'>Hi, my name is </h4>}
        {shouldRender&&<h1 className='name'>Ankit Kr. Chowdhury.</h1>}
        {shouldRender&&<h1 className='what-i-do'>I build things for the web.</h1>}
        {shouldRender&&<p className='header-description'>
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at Upstatement.
        </p>}
        {shouldRender&&<a href='google.com' className='sample-button'>Dummy Button</a>}
        
        
      </header>
    </div>
  );
}

export default Header;
