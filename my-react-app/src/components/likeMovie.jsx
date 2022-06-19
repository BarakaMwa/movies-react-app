function LikeMovie(props) {
    return (
        <div className="row justify-content-center">
            <span onClick={() => props.handleLikeClick(props.movie)} role="button" className="mobi-mbri mobi-mbri-hearth mbr-iconfont mbr-iconfont-btn btn col-4 label badge-primary text-center big like-unlike"></span>
        </div>

)
}

export default LikeMovie;