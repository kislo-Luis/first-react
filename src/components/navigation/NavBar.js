import React, { useState } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';

function NavBar(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
          <NavbarBrand href="/"> <img alt="logo" src="/logo192.png"style={{height: 80,width: 80}}/>Isotopos Web </NavbarBrand>
          <NavbarBrand href="#"> <img alt="logo" src="/UserAvatar.png"style={{height: 40,width: 40}}/> </NavbarBrand>
          
        
      </Navbar>
    </div>
  );
}

export default NavBar;