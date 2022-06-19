import MovieList from './movieList';
import IntroHeader from './components/introHeader';

/*Renders intro Header*/

function Home() {

    return (
        <section id="introHeader">
            <IntroHeader title={"Movie List"} buttonId={"movie-list"}/>
            <MovieList/>
        </section>
    )


}

export default Home;