import Movie from "./movie";
import {useEffect, useState} from "react";
import UnLikeMovie from "./unLikeMovie";
import {newLikedMovies} from "./movieList";

function MovieListLiked() {

    let [movies, setMovies] = useState([]);
    const [likedMovies, setLikedMovies] = useState([newLikedMovies]);

    const getMovies = async () => {

        console.log(newLikedMovies)

        setMovies(newLikedMovies)

        movies = newLikedMovies;

        console.log(movies);

    };

    useEffect(() => {
        getMovies();
    }, [newLikedMovies])


    const removeLikedMovie = (movie) => {
        const newLikedMovies_ = [...likedMovies, movie];
        setLikedMovies(newLikedMovies_);
        console.log(newLikedMovies_)
    }

    return (

        <section className="features3 cid-t8WDofjtve" id="movie-list-like">
            <div className="container-fluid scroll-x">
                <div className="media-container-row row justify-content-start">

                    {
                        movies.map((movie) =>
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
                                likeMovie = {UnLikeMovie}
                                handleLikeClick={removeLikedMovie}
                            />)
                    }

                </div>
            </div>
        </section>
    );
}

export default MovieListLiked;