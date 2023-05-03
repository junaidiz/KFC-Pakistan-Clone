import { useState } from 'react';
import './App.css'
import Header from './components/header/header'
import Home from './pages/home'

function App() {
  const [cartCount, setCartCount] = useState(0);
  
  return (
      <div>
        <Header cartCount={cartCount}/>
        <Home 
          cartCount={cartCount}
          setCartCount={setCartCount}
        />
        {/* <Footer/> */}
      </div>
      
  )
}

export default App
