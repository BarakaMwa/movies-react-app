function Movie(prop) {

    const movieDetails = () => {

    }


        const LikeMovie = prop.likeMovie;

    return (
        <div className="card p-3 col-sm-6 col-md-6 col-lg-2">
            <div className="card-wrapper align-content-center animate__animated pb-0"
                 onClick={() => movieDetails(prop)}>
                <div className="card-img">
                    <img src={"https://image.tmdb.org/t/p/w300" + prop.poster_path} alt="images"/>
                </div>
                {<LikeMovie
                    handleLikeClick = {prop.handleLikeClick}
                    movie = {prop}
                />}
            </div>
        </div>
    );
}

export default Movie;