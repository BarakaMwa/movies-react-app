function Movie(props) {
    return (
            <div className="card p-3 col-sm-6 col-md-6 col-lg-2">
                <div className="card-wrapper animate__animated pb-0">
                    <div className="card-img">
                        <img src={"https://image.tmdb.org/t/p/w300" + props.poster_path} alt="images"/>
                    </div>
                </div>
            </div>
    );
}

export default Movie;