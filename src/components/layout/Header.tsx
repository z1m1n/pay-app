import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar 
      color="light" 
      light 
      expand="md"
    >
      <div className="container">
        <NavbarBrand to="/">
          Pay App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse 
          isOpen={isOpen} 
          navbar
        >
          <Nav 
            className="ml-auto" 
            navbar
          >
            <NavItem>
              <NavLink 
                tag={Link} 
                to="/checkout"
              >
                Checkout
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link} 
                to="/timeline"
              >
                Timeline
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                tag={Link} 
                to="/cards"
              >
                Saved Cards
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;