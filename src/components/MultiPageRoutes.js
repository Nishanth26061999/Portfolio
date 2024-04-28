import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route path={'/Portfolio'} element={<Home />} />
            <Route path={'/Portfolio/home'} element={<Home />} />
            <Route path={'/Portfolio/about'} element={<About />} />
        </Routes>
    )
}