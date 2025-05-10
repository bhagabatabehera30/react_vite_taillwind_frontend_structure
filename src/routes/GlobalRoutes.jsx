import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import FrontedRoutes from './FrontedRoutes';


function GlobalRoutes() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<FrontedRoutes />} />
            </Routes>
        </>
    );
}

export default GlobalRoutes;
