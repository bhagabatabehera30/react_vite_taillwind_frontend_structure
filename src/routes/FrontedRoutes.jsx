import React from 'react';
import {
    Routes,
    Route,
    useLocation
} from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/error/NotFound';
import CMSPage from '../pages/frontend/CMSPage';

function FrontedRoutes() {
    
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/auth">
                    <Route exact path="login" element={<Login />} />
                </Route> */}
                {/* Dynamic CMS slug route */}
                <Route path=":slug" element={<CMSPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default FrontedRoutes;
