import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavbarComponent from './components/navbarComponent';
import MovieDetails from './components/movieDetails';
import reportWebVitals from './reportWebVitals';

/*Renders movie Details*/

const navbar = ReactDOM.createRoot(document.getElementById('menu1-0'));
navbar.render(<NavbarComponent/>)

const introHeader = ReactDOM.createRoot(document.getElementById('introHeader'));
introHeader.render(<MovieDetails/>)

reportWebVitals();
