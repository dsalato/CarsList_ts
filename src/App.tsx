import React from 'react';
import Main from "./layouts/Main";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddCar from "./pages/AddCar";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main/>}>
                <Route path='' element={<Home/>}/>
                <Route path='addCar' element={<AddCar/>}/>
                <Route path='about' element={<About/>}/>
            </Route>
        </Routes>
    );
}

export default App;
