import Movie from "./components/movie";
import SearchInputBox from "./components/searchInputBox";
import LikeMovie from "./components/likeMovie";
import {useEffect, useState} from "react";

/**
 * Renders Movie List
 * */

function MovieList() {

    const localStore = JSON.parse(localStorage.getItem("liked-movies"))
    const [searchValue, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    let [likedMovies, setLikedMovies] = useState(localStore);

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

        <section className="features3 cid-t8WDofjtve" id="movie-list">
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