import Movie from "./movie";
import {useEffect, useState} from "react";
import UnLikeMovie from "./unLikeMovie";

function MovieListLiked() {

    const localStore = JSON.parse(localStorage.getItem("liked-movies"))
    const [likedMovies, setLikedMovies] = useState(localStore);

    const getMovies = async (likedMovies) => {

        console.log(likedMovies)

        setLikedMovies(likedMovies)

        console.log(likedMovies);

    };

    useEffect(() => {
        getMovies(likedMovies);
    }, [likedMovies])

    const saveToLocalStorage = (items) => {
        localStorage.setItem('liked-movies', JSON.stringify(items));
    }

    const removeLikedMovie = (movie) => {
        const newLikedMovies = likedMovies.filter(
            (likedMovie) => likedMovie.id !== movie.id);
        setLikedMovies(newLikedMovies);
        console.log(newLikedMovies)
        saveToLocalStorage(newLikedMovies);
    }

    return (

        <section className="features3 cid-t8WDofjtve" id="movie-list-like">
            <div className="container-fluid scroll-x">
                <div className="media-container-row row justify-content-start">

                    {
                        likedMovies.map((movie) =>
                            <Movie
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
                                likeMovie={UnLikeMovie}
                                handleLikeClick={removeLikedMovie}
                            />)
                    }

                </div>
            </div>
        </section>
    );
}

export default MovieListLiked;