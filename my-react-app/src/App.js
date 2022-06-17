import './App.css';
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
import "./index.css";

function App() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand font-weight-bolder" href="#">Movie Api Application</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Liked Movies</a>
            </li>

          </ul>
        </div>
      </nav>
  );
}

export default App;
