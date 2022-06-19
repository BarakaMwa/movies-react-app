function UnLikeMovie(props){
    return(
        <div className="row justify-content-center">
            <button onClick={() => props.handleLikeClick(props.movie)} className="btn btn-md btn-primary btn-block display-4 text-secondary">
                <span className="mobi-mbri mobi-mbri-close mbr-iconfont mbr-iconfont-btn text-secondary"></span>
            </button>
        </div>
    )
}
export default UnLikeMovie;