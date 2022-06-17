function Movie(props) {
    return (
        <div className="card p-3 col-12 col-md-6 col-lg-4">
            <div className="card-wrapper">
                <div className="card-img">
                    <img src={"https://image.tmdb.org/t/p/w500"+props.poster_path} alt="images"/>
                </div>
                <div className="card-box">
                    <h4 className="card-title mbr-fonts-style display-7">
                        {props.title}
                    </h4>
                    <p className="mbr-text mbr-fonts-style display-7">

                    </p>
                </div>
                <div className="mbr-section-btn text-center">
                    <button href="https://mobiri.se" className="btn btn-white display-4">Like Movie</button>
                    <button href="https://mobiri.se" className="btn btn-warning display-4">Read More</button></div>
            </div>
        </div>
    );
}

export default Movie;