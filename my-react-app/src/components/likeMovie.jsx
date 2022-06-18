function LikeMovie(props) {
    return (
        <div className="row justify-content-center">
            <span onClick={() => props.handleLikeClick(props.movie)} role="button" className="mobi-mbri mobi-mbri-hearth mbr-iconfont mbr-iconfont-btn btn col-4 label badge-primary text-center big"></span>
            <span role="button" className="mobi-mbri mobi-mbri-browse mbr-iconfont mbr-iconfont-btn col-4 label btn badge-success text-center big"></span>
            {/*<span onClick={()=> props.unClickLikeMovie(props)} role="button" className="mobi-mbri mobi-mbri-close mbr-iconfont mbr-iconfont-btn col-6 label btn-sm badge-secondary"></span>*/}
        </div>

)
}

export default LikeMovie;