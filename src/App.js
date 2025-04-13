
import { Fragment } from 'react';
import './App.css';
import './styles/App.css';
import './styles/Header.css';
import About from './PortfolioContainer/AboutMe/About';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';
import { About1,About2,About3,About4 } from './PortfolioContainer/AboutMe/About';
import Header from './PortfolioContainer/Header/Header';
import Home from './PortfolioContainer/Home/Home';
import Product from './PortfolioContainer/Product/Product';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function Myheader() {

    // for js object we need {}
    const a= "Manish"

    // Destructuring

    const obj ={
        ab:45,
        cd:78,
    }

    //  just above we have to write obj.ab to access data but

    const { ab,cd } = obj

    return(
    <div>
        <h1>This is header {a}</h1>
        <h2>This is header2 {ab}</h2>
        <h3>This is header3 {cd}</h3>
    </div>
    );
}

function App() {
    // const arr = [1,2,3,4];
    return (   
    <Fragment>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                      {/* passing object in specific component */}
                <Route path='/about' element={<About name="Manish" Salary="2300" price={200} />} />
                <Route path='/contactme' element={<ContactMe />} />
                        {/* for dynamic routing use : infront of id */}
                <Route path="/product/:id" element={<Product />} />
                <Route path='*' element={<div>Page Not Found 404</div>}/>
            </Routes>
        </Router>
        
        <div>
            <Myheader/>
            <About1/>
            <About2/>
            <About3/>
            <About4/>

            {/* {arr.map((i) =>(
            <Product value={i} />
        ))} */}

        </div>
       
    </Fragment>
    );
}

export default App;
