function Movie(props) {

    const movieDetails = () => {

    }


        const LikeMovie = props.likeMovie;
    return (
        <div className="card p-3 col-sm-6 col-md-6 col-lg-2">
            <div className="card-wrapper align-content-center animate__animated pb-0"
                 onClick={() => movieDetails(props.id)}>
                <div className="card-img">
                    <img src={"https://image.tmdb.org/t/p/w300" + props.poster_path} alt="images"/>
                </div>
                {<LikeMovie/>}
            </div>
        </div>
    );
}

export default Movie;