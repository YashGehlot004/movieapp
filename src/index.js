import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PlayList from './PlayList';
import Descripton from './Descripton';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routers = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'Playlist',
    element:<PlayList/>
  },
  {
    path:'description',
    element:<Descripton/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
