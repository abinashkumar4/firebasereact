import React , {useState,useContext} from  "react"
import { 
    Collapse,
    Navbar,NavbarToggler,   
    NavbarBrand,
    Nav,
    NavItem,NavLink,NavbarText
 } from "reactstrap";

 import {Link} from "react-router-dom"
 import { UserContext } from "../Context/UserContext";

 const Header = () => {
     const context = useContext(UserContext);
     const [isOpen, setIsopen] = useState(false);
     const toggle = () => setIsopen(!isOpen);
     return (
     <Navbar color ="info" light expand ="md">
         <NavbarBrand><Link to ="/" className="text-white">
             LCO GITFIRE APP</Link></NavbarBrand>
             <NavbarText>
                 {
                 
                 context.user?.email ? context.user.email : ""
                 
                 }
             </NavbarText>
             <NavbarToggler onClick = {toggle} />
             <Collapse isOpen={isOpen} navbar> 
             <Nav className="ml-auto" navbar>
                 {
                     context.user ? (
                           <NavItem>
                     <NavLink tag = {Link}  to = "/" className="text-white">
                         Logout
                     </NavLink>
                 </NavItem>
                     ) : (<>
                        

                      <NavItem>
                      <NavLink tag = {Link}  to = "/signup" className="text-white">
                         Signup
                     </NavLink>
                 </NavItem>
                  <NavItem>
                     <NavLink tag = {Link}  to = "signin" className="text-white">
                         SignIn
                     </NavLink>
                 </NavItem>

                        </>)
                 }
                
                
             </Nav>
             </Collapse>
     </Navbar>
     )
 }

 export default Header;