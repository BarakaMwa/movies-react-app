/**
 * Renders Detailed Movie
 * takes in Prop Of Movie
 * @param prop
 * */
function MovieDetailed(prop) {


    return (

        <div className="container">
            <div className="media-container-row">
                <div className="mbr-figure mbr-figure-one">
                    <a href="#">
                        <img src={"https://image.tmdb.org/t/p/w300" + prop.poster_path} alt="images"/>
                    </a>
                </div>

                <div className="media-content">
                    <h1 className="mbr-section-title mbr-white pb-3 mbr-fonts-style display-1"><strong>
                        {prop.title}</strong></h1>

                    <div className="mbr-section-text mbr-white pb-3 ">
                        <div><b>Description:</b>{prop.overview}</div>
                        <div><b>Rating:</b>{prop.desc}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieDetailed;