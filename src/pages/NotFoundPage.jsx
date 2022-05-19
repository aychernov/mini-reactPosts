import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1> This page is`t exist. Go home: <Link to="/about">Home</Link> </h1>
        </div>
    );
};

export default NotFoundPage;
