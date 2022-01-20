import React from 'react';
import { Dropdown ,DropdownButton,ButtonGroup,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../Product.css"

const NavigationBar = () => {
    return (
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            <Link className="home"  to="/">Home</Link>
   <h4 className='cat'> Product Category </h4>
 
   <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Laptop
  </Dropdown.Toggle>

  <Dropdown.Menu>
   <Link className='lnk' to="/mobile"> <Dropdown.Item href="/mobile" >Mobile</Dropdown.Item></Link>
  </Dropdown.Menu>
</Dropdown>
        </div>
    );
};

export default NavigationBar;