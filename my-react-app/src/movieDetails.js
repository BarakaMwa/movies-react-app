import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavbarComponent from './components/navbarComponent';
import MovieDetails from './components/movieDetails';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );


const navbar = ReactDOM.createRoot(document.getElementById('menu1-0'));
navbar.render(<NavbarComponent/>)

const introHeader = ReactDOM.createRoot(document.getElementById('introHeader'));
introHeader.render(<MovieDetails/>)


// ReactDOM.render(<NavbarComponent/>, document.getElementById('menu1-0'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
