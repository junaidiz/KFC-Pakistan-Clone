import React, { useEffect, useState} from "react";

import ReactDOM from "react-dom/client"; 
import {API_RESPONSE} from './utils/api';
import { useCustomHook } from "./utils/Hook";
// Functional Component
const Header = () => {
    return (
        <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black'}}>
            <img src="https://img.freepik.com/premium-vector/online-food-order-logo-icon_61778-45.jpg" alt="logo" style={{width: '120px'}} />
            <nav>
                <ul style={{    display: 'flex', columnGap: '10px', marginRight: '20px' }}>
                    <li style={{listStyleType: 'none', cursor: 'pointer'}}>Home</li>
                    <li style={{listStyleType: 'none', cursor: 'pointer'}}>About Us</li>
                    <li style={{listStyleType: 'none', cursor: 'pointer'}}>Contact Us</li>
                    <li style={{listStyleType: 'none', cursor: 'pointer'}}>Cart [0]</li>
                    <li style={{listStyleType: 'none', cursor: 'pointer'}}>Login / Logout</li>
                </ul>
            </nav>
        </header>
    )
};

const FoodContainer = ({ data }) => {
    return (
        <div style={{
            width: '250px',
            border: '1px solid',
            padding: '15px'
        }}>
            <img src={'https://images.kfcpakistan.com/' + data.imageUrl} alt="food image" style={{    width: '250px'}} />
            <h4>{data.name}</h4>
            <p>{data.productDescription}</p>
            <h4>{data.originalPrice}</h4>
            <button>Add to Card</button>
        </div>
    )
};

const Body = () => {
    const [value , setValue] = useState(10);
    const [res , setRes] = useState([]);

    const [newName , updatedName] = useCustomHook('inital APP name');

    useEffect(() => {
        // console.log('hello value updatte');
    } , [value]);

    useEffect(() => {
        // console.log('hello res updatte');
    } , [res]);

    useEffect(() => {
        // console.log('useEffect' , res);
        // axios.get('URL').then((response) => {
            
        //     setRes(response.data)
        // })
        setTimeout(() => {
            // console.log('useEffect SetTimeOut');
            setRes(API_RESPONSE);
        } , 2000);

    } , []);
   
    function removeProduct() {
        let v = 20;
        if(value === 10){
            v = 20;
        }else{
            v = 10;
        }
        setValue(v); 
    }
    return (
        <>
        <h1>{newName    }</h1>
        
        <input type="text" onChange={(e) => updatedName(e.target.value || 'hello world')} />
            <button onClick={() => removeProduct()}>Click here {value}</button>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {res.map((data) => {
                    return (
                        <FoodContainer data={data} key={data.id}/> 
                    )
                })}
            </div>
        
        </>
    )
};

const Footer = () => {
    return (
        <h1>Footer</h1>
    )
};

const App = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<App />);
