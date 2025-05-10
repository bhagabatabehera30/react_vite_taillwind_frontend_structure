import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './app/i18n';
import './css/style.css';
import GlobalRoutes from './routes/GlobalRoutes';
//console.log(import.meta.env.VITE_API_BASE_URL); 
function App() {
  const location = (useLocation() !== '/') ? useLocation() : '/';
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <GlobalRoutes></GlobalRoutes>
    </>
  );
}

export default App;
