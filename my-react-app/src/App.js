import "./assets/web/assets/mobirise-icons2/mobirise2.css";
import "./assets/web/assets/mobirise-icons/mobirise-icons.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-grid.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css";
import "./assets/dropdown/css/style.css";
import "./assets/tether/tether.min.css";
import "./assets/theme/css/style.css";
import "./assets/mobirise/css/mbr-additional.css";
import "./assets/animate/animate.min.css";
import './index.css';
import Home from "./home";
import Liked from "./liked";
import NoPage from "./noPage";
import NavbarComponent from "./components/navbarComponent";
import MovieDetails from "./movieDetails";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

/*Renders Other App Elements Using Routes*/

function App() {

    var viewMovie = JSON.parse(localStorage.getItem("view-movie"));
    console.log(viewMovie);

    return (
        <Router>
            <section>
                <section className="menu cid-t8WyjJrifv" id="menu1-0">
                    <NavbarComponent display={true}/>
                </section>
                <section id="app-context">
                    <Routes>
                        <Route exact path="/" element={<Home/>}>
                        </Route>
                        <Route path="/liked" element={<Liked/>}/>
                        <Route path="/viewMovie" element={<MovieDetails movie={viewMovie}/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Routes>
                </section>
            </section>
        </Router>

    );
}

export default App;