import React from "react";
import './styles/App.css'
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Post";
import Navbar from "./components/UI/Navbar/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import PostIdPage from "./pages/PostIdPage";
import { routes } from "./router/router";


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Posts />} />
                {routes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact} />
                )}
                <Route path="*" element={<Navigate to="" replace />} />
            </Routes>

        </BrowserRouter>

    )
}

export default App;
