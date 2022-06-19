import {Link} from 'react-router-dom';


function NavbarComponent(props) {

    if (props) {
        return (

            <nav
                className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
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
                    <Link to="/">
                         <img src="./assets/images/mbr.png" alt="Mobirise" title=""/>
                    </Link>
                </span>
                        <span className="navbar-caption-wrap"><a className="navbar-caption text-white display-4"
                                                                 href="https://mobiri.se">
                        Movies</a></span>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                        <li className="nav-item">
                            <Link className="nav-link link text-white display-4" to="/liked">
                                Liked Movies
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link link text-white display-4" to="/">
                                All Movies
                            </Link>
                        </li>

                    </ul>

                </div>
            </nav>
        );
    } else {
        return (
            <></>
        )
    }


}

export default NavbarComponent;