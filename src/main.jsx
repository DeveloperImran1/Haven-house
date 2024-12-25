import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/Route.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* helmetProvider use kora hoi dynamicly title change korar jonno  */}
      <HelmetProvider>
    <AuthProvider>

    
        <RouterProvider router={router} />

    </AuthProvider>
      </HelmetProvider>
    <ToastContainer />
  </React.StrictMode>,
)
