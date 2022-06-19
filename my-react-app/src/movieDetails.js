import {useEffect, useState} from "react";
import MovieDetailed from "./components/movieDetailed";
import LikeMovie from "./components/likeMovie";
import UnLikeMovie from "./components/unLikeMovie";

/**
 * Renders Detailed Movie List
 * takes in Prop Of Movie
 * @param prop
 * */

function MovieDetails(prop) {

    // let background = "https://image.tmdb.org/t/p/w800"+prop.movie.backdrop_path;
        console.log(prop.movie);
    const localStore = JSON.parse(localStorage.getItem("liked-movies"))
    let [likedMovies, setLikedMovies] = useState(localStore);
    const [movies, setMovies] = useState([prop.movie]);
    const getMovies = async (movies) => {

        console.log(movies)

        setMovies(movies)

        console.log(movies)

    };

    useEffect(() => {
        getMovies(movies);
    }, [movies])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('liked-movies', JSON.stringify(items));
    }

    const addLikedMovie = (movie) => {

        /*if exists Dont add*/
        if(localStore.filter((item)=>item.id === movie.id).length === 0){
            save()
        }

        function save() {
            const newLikedMovies = [...likedMovies, movie];
            setLikedMovies(newLikedMovies);
            console.log(newLikedMovies)

            saveToLocalStorage(newLikedMovies)
        }

    }

    return (
        <section className="header3 cid-t8Wz5pjAGp mbr-fullscreen mbr-parallax-background" id="header3-1"
                 >
            <div className="mbr-overlay mbr-overlay-one">
            </div>

            {
                movies.map((movie) =>
                    <MovieDetailed
                        title={movie.title}
                        backdrop_path={movie.backdrop_path}
                        overview={movie.overview}
                        adult={movie.adult}
                        genre_ids={movie.genre_ids}
                        id={movie.id}
                        original_language={movie.original_language}
                        popularity={movie.popularity}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date}
                        video={movie.video}
                        vote_average={movie.vote_average}
                        vote_count={movie.vote_count}
                        likeMovie={LikeMovie}
                        unLikeMovie={UnLikeMovie}
                        handleLikeClick={addLikedMovie}
                    />)
            }

        </section>
    );
}

export default MovieDetails;