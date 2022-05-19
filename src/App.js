import React from "react";
import './styles/App.css'
import {Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Post";
import Navbar from "./components/UI/Navbar/Navbar";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
    return (
            <BrowserRouter>
                <Navbar/>
            <Routes>

                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/NotFoundPage" element={<NotFoundPage/>}/>

                <Route path="*" element={ <Navigate to="/NotFoundPage" replace />}/>
            </Routes>

            </BrowserRouter>

    )
}

export default App;
