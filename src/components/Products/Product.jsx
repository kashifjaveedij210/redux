import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = () => {
    const stateProduct = useSelector((state) => state.ProductReducer.Products);
    const dispatch = useDispatch();
    const[data,SetData]=useState([])
     const getData=async()=>{
        const productLap=await axios.get("https://aveosoft-react-assignment.herokuapp.com/products")
        const productCategory=await axios.get("https://aveosoft-react-assignment.herokuapp.com/categories")
        console.log( "this is my data==>", productLap);
        console.log("this is Category", productCategory);
        SetData(productLap.data)
        
        dispatch({ type: "ADD-PRODUCTS", data:productLap.data });
    }
    useEffect(()=>{
        getData()
    },[])
    
    return (
        <Row>       
             <div>
            
            <div style={{display:"flex",flexWrap:"wrap", paddingTop:"50px"}}>
            {stateProduct.map((item)=>{
                if(item.categoryId==0)
                return(
                    <Col lg={4}>
                    <div style={{paddingTop:"30px"}}>
                    <img src={item.image} alt="Loading" />
                        <h4>Name:{item.name}</h4>
                        <h5>Model:{item.model}</h5>
                        <h5>Price:${item.price}</h5>
                       <Link to="/details"> <Button onClick={()=>dispatch({type:"PRODUCT-DETAILS",data:item})}>View Details</Button></Link>
                    </div>
                    </Col>
                )
            })}
            </div>
            
        </div>
       
        </Row>
    );
};

export default Product;
