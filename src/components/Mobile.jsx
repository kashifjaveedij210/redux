import React from 'react';
import { useSelector } from 'react-redux';
import { Button ,Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Mobile = () => {
    const dispatch=useDispatch()
    const data=useSelector(state=>state.ProductReducer.Products)
    return (
        <Row>  
        <div id="Mobile" style={{display:"flex",flexWrap:"wrap",padding:"50px"}}>
            {data.map((item)=>{
                if(item.categoryId==1){
                    return(               
                       
                            <Col lg={3}>
                          <div style={{paddingTop:"20px"}}>
                     
                    <img src={item.image} alt="Loading" />
                    <h4>Name:{item.name}</h4>
                    <h5>Model:{item.model}</h5>
                    <h5>Price:${item.price}</h5>
                    <Link to="/details"><Button onClick={()=>dispatch({type:"PRODUCT-DETAILS",data:item})}>View Details</Button></Link>
                  
                </div>
                </Col>
               
                    )
                    
                }
            })}
        </div>
        </Row>
    );
};

