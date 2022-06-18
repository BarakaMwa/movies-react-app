import React from 'react';
import MovieList from './components/movieList';
import IntroHeader from './components/introHeader';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

function Home() {

    return (
            <section id="introHeader">
                <IntroHeader title={"Movie List"} buttonId={"movie-list"}/>
                <MovieList/>
            </section>
    )

// ReactDOM.render(<NavbarComponent/>, document.getElementById('menu1-0'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

}

export default Home;