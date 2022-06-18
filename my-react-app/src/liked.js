import React from 'react';
// import App from './App';
import IntroHeader from './components/introHeader';
import MovieList from "./components/movieList";
import MovieListLiked from "./components/movieListLiked";


function Liked() {

    return (
        <section id="introHeader">
            <IntroHeader title={"Liked Movie List"} buttonId={"movie-list-liked"}/>
            <MovieListLiked/>
        </section>
    )

// ReactDOM.render(<NavbarComponent/>, document.getElementById('menu1-0'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

}

export default Liked;
