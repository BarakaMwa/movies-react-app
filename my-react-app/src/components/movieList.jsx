import Movie from "./movie";
import SearchInputBox from "./searchInputBox";
import LikeMovie from "./likeMovie";
import {useEffect, useState} from "react";
export let newLikedMovies;

function MovieList() {

    const [searchValue, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [likedMovies, setLikedMovies] = useState([]);
    const getMovies = async (searchValue) => {

        let url = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

        if (searchValue !== null && searchValue !== "") {
            url = "https://api.themoviedb.org/3/search/movie?api_key=d0f5f2e135336200362af8a1a73acb17&query=" + searchValue;
        }

        const response = await fetch(url);

        const data = await response.json();

        console.log(data)

        setMovies(data.results)
    };

    useEffect(() => {
        getMovies(searchValue);
    }, [searchValue])
    const addLikedMovie = (movie) => {
       newLikedMovies = [...likedMovies, movie];
        setLikedMovies(newLikedMovies)
        console.log(newLikedMovies)
    }


    return (

        <section className="features3 cid-t8WDofjtve" id="features3-2">
            {
                <SearchInputBox
                    searchValue={searchValue}
                    setSearch={setSearch}
                />
            }
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
                                likeMovie={LikeMovie}
                                handleLikeClick={addLikedMovie}
                            />)
                    }

                </div>
            </div>
        </section>
    );
}

export default MovieList;