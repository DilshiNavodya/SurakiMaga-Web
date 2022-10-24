import React, {useState,useEffect} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Logout from './Logout';
import { Link } from "react-router-dom";
import apiClient from '../Services/ApiClient';
import './Navbar.css'

const logo = require('../assests/logo.png');
const profileImage = require('../assests/Faalil.jpeg');



export default function ParentNavbar() {

  const [children,setChildren]=useState([])

  function logout(){
    apiClient.removeToken();
    window.location.href = "/log-in";
  }

  
  useEffect(() => {
    async function getChildrennames() { 
        const{dataresponse,error} = await apiClient.getChildren()
        // console.log(dataresponse)
        setChildren(dataresponse.result)
        
    }
    getChildrennames();
}, []);

  const [logoutShow, setlogoutShow] = React.useState(false);

  return (
    <div >
        <Navbar expand="lg" className='mb-3 bg-secondary bg-light parent_navbar' justify >
      <Container className='parent_navbar'>
        <Navbar.Brand href="#home"> <img src={logo} style={{
            height:'64px',
            width:'64px',
            }} alt="Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="fw-bold">
            <Nav.Link href="dashboard">Vehicles</Nav.Link>
            <NavDropdown title="My Children" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="parentmychildren">Roshan</NavDropdown.Item>
              <NavDropdown.Item href="NewChildren">
                Dilshi
              </NavDropdown.Item> */}
              {children.map((data)=>{
                        // console.log(data)
                        return  (
                        <NavDropdown.Item key={data.id}> <Link to='/parentmychildren' className="text-decoration-none text-dark" state={data} >{data.fullname}</Link></NavDropdown.Item> 
                        )
                    })}
              <NavDropdown.Divider />
              <NavDropdown.Item href="parentaddchildren">
                Add another Child
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Route to School" id="basic-nav-dropdownschool">
            {children.map((data)=>{
                        // console.log(data)
                        return  (
                        <NavDropdown.Item key={data.id}> <Link to='/parentroute' className="text-decoration-none text-dark" state={data} >{data.fullname}</Link></NavDropdown.Item> 
                        )
              })}
            </NavDropdown>
            <NavDropdown  title={
                        
                        <img className="thumbnail-image ms-5 center rounded" 
                            src={profileImage} 
                            alt="user pic"
                            
    style={{ width: '50px' }}
                        />
                  
                } id="basic-nav-dropdownschool">
              
              <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  href="log-in" onClick={logout}>
                Log out
                {/* <Logout
                  show={logoutShow}
                  onHide={() => setlogoutShow(false)}
                /> */}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            
            
    </div>
  )
}
