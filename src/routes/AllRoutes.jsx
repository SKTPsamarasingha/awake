import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";

// Lazy load your pages
const LandingPage = lazy(() => import("../pages/LandingPage.jsx"));

const AllRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<LandingPage/>}/>
            </Route>
        </Routes>
    );
};

export default AllRoutes;
