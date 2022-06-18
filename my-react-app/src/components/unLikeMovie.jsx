function UnLikeMovie(props){
    return(
        <div className="row justify-content-center">
            <span onClick={() => props.handleLikeClick(props.movie)} role="button" className="mobi-mbri mobi-mbri-close mbr-iconfont mbr-iconfont-btn btn col-4 label badge-secondary text-center big"></span>
        </div>
    )
}
export default UnLikeMovie;