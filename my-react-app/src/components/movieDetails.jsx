import {useEffect, useState} from "react";
import Movie from "./movie";
import LikeMovie from "./likeMovie";

function MovieDetails() {

    const [movies, setMovies] = useState([]);
    const getMovies = async () =>{

        const url = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

        const response = await fetch(url);

        const data =await response.json();

        console.log(data)

        setMovies(data.results)

        // movies = data.results;
    };

    useEffect(()=>{
        getMovies();
    }, [])
    return (
        <section className="header3 cid-t8Wz5pjAGp mbr-fullscreen mbr-parallax-background" id="header3-1" style={{backgroundImage: url('https://image.tmdb.org/t/p/w800' + props.backdrop_path)}}>
            <div className="mbr-overlay mbr-overlay-one">
            </div>

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
                        like={0}
                    /> )
            }

        </section>
    );
}

export default MovieDetails;