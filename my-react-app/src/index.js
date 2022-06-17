import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavbarComponent from './components/navbarComponent';
import MovieListTitle from './components/movieListTitle';
import MovieList from './components/movieList';
import IntroHeader from './components/introHeader';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

const navbar = ReactDOM.createRoot(document.getElementById('menu1-0'));
navbar.render(<NavbarComponent/>)

const introHeader = ReactDOM.createRoot(document.getElementById('introHeader'));
introHeader.render(<IntroHeader/>)

const movieListTitle = ReactDOM.createRoot(document.getElementById('movieListTitle'));
movieListTitle.render(<MovieListTitle/>)

const movieList = ReactDOM.createRoot(document.getElementById('movieList'));
movieList.render(<MovieList/>)

// ReactDOM.render(<NavbarComponent/>, document.getElementById('menu1-0'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
