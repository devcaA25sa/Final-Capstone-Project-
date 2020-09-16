import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../static/images/images.png';
function Navbar() {
     return (
          <nav>
               <img src={Logo} alt= 'images'/>
               <ul className='nav-link'>
                    <Link to= '/home'>
                    <li>Home</li>
                    </Link>

                    <Link to= '/Recipts'>
                    <li>Recipts</li>
                    </Link>
                    
                    <Link to= '/about'>
                    <li>About</li>
                    </Link>


                    
               </ul>
          </nav>
     )
     
}
export default Navbar;