/**
 * Renders Like button
 * takes in Prop Of Movie
 * @param prop
 * */
function LikeMovie(prop) {
    return (
        <div className="row justify-content-center">
            <button onClick={() => prop.handleLikeClick(prop.movie)}
                    className={"btn btn-md btn-primary btn-block display-4"}>
                <span
                    className="mobi-mbri mobi-mbri-hearth mbr-iconfont mbr-iconfont-btn text-center big like-unlike"></span>
            </button>

        </div>

    )
}

export default LikeMovie;