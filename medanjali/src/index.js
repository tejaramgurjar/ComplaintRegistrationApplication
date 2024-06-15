import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider  } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import SubmitComplaint from './components/SubmitComplaint';

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      {/* {nesting} */}
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='login' element={<Login/>}>
      </Route>
      <Route path='signup' element={<SignUp/>}>
      </Route>
      <Route path='submitcomplain' element={<SubmitComplaint/>}>
      </Route>
    </Route>
  )
 )




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>,
);

reportWebVitals();
