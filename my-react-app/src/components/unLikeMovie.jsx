/**
 * Renders Like button
 * takes in Prop Of Movie
 * @param prop
 * */
function UnLikeMovie(prop) {
    return (
        <div className="row justify-content-center">
            <button onClick={() => prop.handleLikeClick(prop.movie)}
                    className="btn btn-md btn-primary btn-block display-4 text-secondary">
                <span className="mobi-mbri mobi-mbri-close mbr-iconfont mbr-iconfont-btn text-secondary"></span>
            </button>
        </div>
    )
}

export default UnLikeMovie;