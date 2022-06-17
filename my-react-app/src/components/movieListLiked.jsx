import Movie from "./movie";
import {useEffect, useState} from "react";

function MovieListLiked() {

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

    /*const movies = [
        {
            "adult": false,
            "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
            "genre_ids": [14, 12, 28],
            "id": 338953,
            "original_language": "en",
            "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
            "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
            "popularity": 3456.961,
            "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
            "release_date": "2022-04-06",
            "title": "Fantastic Beasts: The Secrets of Dumbledore",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 1795
        },
        {
            "adult": false,
            "backdrop_path": "/kmCBLNHsNnlDEtghSaF2nabpG2T.jpg",
            "genre_ids": [28, 878, 14],
            "id": 526896,
            "original_language": "en",
            "original_title": "Morbius",
            "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
            "popularity": 3124.049,
            "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
            "release_date": "2022-03-30",
            "title": "Morbius",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 1665
        },
        {
            "adult": false,
            "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "genre_ids": [28, 12, 35],
            "id": 752623,
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
            "popularity": 3190.602,
            "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            "release_date": "2022-03-24",
            "title": "The Lost City",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 1182
        },
        {
            "adult": false,
            "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "genre_ids": [28, 12, 35],
            "id": 752623,
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
            "popularity": 3190.602,
            "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            "release_date": "2022-03-24",
            "title": "The Lost City",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 1182
        },
        {
            "adult": false,
            "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "genre_ids": [28, 12, 35],
            "id": 752623,
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
            "popularity": 3190.602,
            "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            "release_date": "2022-03-24",
            "title": "The Lost City",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 1182
        },
        {
            "adult": false,
            "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "genre_ids": [28, 12, 35],
            "id": 752623,
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
            "popularity": 3190.602,
            "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            "release_date": "2022-03-24",
            "title": "The Lost City",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 1182
        },
        {
            "adult": false,
            "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
            "genre_ids": [28, 12, 35],
            "id": 752623,
            "original_language": "en",
            "original_title": "The Lost City",
            "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
            "popularity": 3190.602,
            "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
            "release_date": "2022-03-24",
            "title": "The Lost City",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 1182
        }];*/

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
                            /> )
                    }

                </div>
            </div>
        </section>
    );
}

export default MovieListLiked;