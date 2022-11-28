/**
 * Renders Detailed Movie
 * takes in Prop Of Movie
 * @param prop
 * */
import {Link} from "react-router-dom";

function MovieDetailed(prop) {

    console.log(prop)

    const LikeMovie = prop.likeMovie;

    return (

        <div className="container">
            <div className="media-container-row">
                <div className="mbr-figure mbr-figure-one">
                    <Link to="/image">
                        <img src={"https://image.tmdb.org/t/p/w300" + prop.poster_path} alt="images" />
                    </Link>
                </div>

                <div className="media-content">
                    <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>
                        {prop.title}</strong></h1>

                    <div className="mbr-section-text mbr-white pb-3 ">
                        <div><b>Description:</b>
                            <br></br>{prop.overview}</div>
                        <div><b>Rating:</b>
                            <br></br>{prop.vote_average}</div>
                        <div><b>Release Date:</b>
                            <br></br>{prop.release_date}</div>
                        <div><b>Language:</b>
                            <br></br>{prop.original_language}</div>
                    </div>

                    <div className="col-4">
                        {<LikeMovie
                            handleLikeClick={prop.handleLikeClick}
                            movie={prop}
                        />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailed;