
function NavbarComponent() {
    return (
        <nav
            className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div className="menu-logo">
                <div className="navbar-brand">
                <span className="navbar-logo">
                    <a href="#">
                         <img src="./assets/images/mbr.png" alt="Mobirise" title=""/>
                    </a>
                </span>
                    <span className="navbar-caption-wrap"><a className="navbar-caption text-white display-4"
                                                             href="https://mobiri.se">
                        Movies</a></span>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                    <li className="nav-item">
                        <a className="nav-link link text-white display-4" href="/liked"><span
                            className="mobi-mbri mobi-mbri-like mbr-iconfont mbr-iconfont-btn"></span>

                            Liked Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link link text-white display-4" href="/">
                            <span
                                className="mbri-image-slider mbr-iconfont mbr-iconfont-btn"></span>

                            All Movies</a>
                    </li>

                </ul>

            </div>
        </nav>
    );
}

export default NavbarComponent;