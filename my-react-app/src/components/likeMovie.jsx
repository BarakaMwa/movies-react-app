function LikeMovie(props) {
    return (
        <div className="row justify-content-center">
            <button onClick={() => props.handleLikeClick(props.movie)} className={"btn btn-md btn-primary btn-block display-4"}>
                <span className="mobi-mbri mobi-mbri-hearth mbr-iconfont mbr-iconfont-btn text-center big like-unlike"></span>
            </button>

        </div>

)
}

export default LikeMovie;