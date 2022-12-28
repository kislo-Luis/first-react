import React, { useState } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';



function NavBar(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      
      
      <Navbar className="my-2" color="dark" dark {...args}>

          <Link to="/"> <img alt="logo" src="/logo192.png"style={{height: 80,width: 80}}/>Isotopos Web </Link>
          

          
          
        
          <Link to="perfil"> <img alt="logo" src="/UserAvatar.png"style={{height: 40,width: 40}}/> </Link>
       

        
      </Navbar>
    </div>
  );
}

export default NavBar;