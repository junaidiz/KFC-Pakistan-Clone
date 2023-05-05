import React, { useState } from "react";
import ReactDOM from "react-dom/client"; 
import {API_RESPONSE} from './utils/api';
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

const FoodContainer = ({    data}) => {
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
    const [res , setRes] = useState(API_RESPONSE);
    function removeProduct() {
        setRes(res);
        // setValue(20); 
        // console.log(API_RESPONSE)
    }
    return (
        <>
            <button onClick={() => removeProduct()}>Click here {value}</button>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {API_RESPONSE.map((data) => {
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
