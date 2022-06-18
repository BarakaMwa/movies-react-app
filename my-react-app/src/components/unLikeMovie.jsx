function UnLikeMovie(props){
    return(
        <div className="row justify-content-center">
            <span onClick={()=> props.handleLikeClick(props.movie)} role="button" className="mobi-mbri mobi-mbri-close mbr-iconfont mbr-iconfont-btn col-6 label btn-sm badge-secondary"></span>
        </div>
    )
}
export default UnLikeMovie;