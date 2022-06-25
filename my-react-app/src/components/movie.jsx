/**
 * Renders Movie
 * takes in Prop Of Movie
 * @param prop
 * */
function Movie(prop) {

    const LikeMovie = prop.likeMovie;

    return (
        <div className="card p-3 col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mt-3 mb-3">
            <div className="card-wrapper align-content-center animate__animated pb-0">
                <div className="card-img" onClick={() => prop.handleViewClick(prop)}>
                    <img src={"https://image.tmdb.org/t/p/w300" + prop.poster_path} alt="images"/>
                </div>
                {<LikeMovie
                    handleLikeClick={prop.handleLikeClick}
                    movie={prop}
                />}
            </div>
        </div>
    );
}

export default Movie;