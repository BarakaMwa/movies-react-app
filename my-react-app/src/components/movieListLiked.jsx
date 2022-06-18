import Movie from "./movie";
import {useEffect, useState} from "react";
import LikeMovie from "./likeMovie";
import {newLikedMovies} from "./movieList";

function MovieListLiked() {

    const [movies, setMovies] = useState([]);


    const getMovies = async (newLikedMovies) =>{

        /*const url = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

        const response = await fetch(url);

        const data =await response.json();

        console.log(data)*/

        setMovies(newLikedMovies)

        // movies = data.results;
    };

    useEffect(()=>{
        getMovies();
    }, [newLikedMovies])

    return (

        <section className="features3 cid-t8WDofjtve" id="features3-2">
            <div className="container-fluid scroll-x">
                <div className="media-container-row row">

                    {
                        movies.map((movie)=>
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
                                likeMovie = {LikeMovie}
                            /> )
                    }

                </div>
            </div>
        </section>
    );
}

export default MovieListLiked;