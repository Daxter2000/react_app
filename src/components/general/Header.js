import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Header(props) {
  const navigate = useNavigate()

  const handleLoggedOut = () => {
    axios.delete("http://localhost:3001/logout", {withCredentials:true}).then(
    props.handleLoggedOut(),
    navigate("/login")
    ).catch(e => {
        console.log("errors", e)
    })
}
  return (
          <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/home">Client Managment System</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/clients">Clientes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/ventas">Ventas</a>
                  </li>
                  {
                    props.status === "NOT_LOGGED_IN" ? 
                      <button type="button" className="btn btn-light" onClick={() => navigate("/login")}> Iniciar Sesion</button>
                    :
                      <button type="button" className="btn btn-light" onClick={() => handleLoggedOut()}>Cerrar Sesión</button>

                    }                  
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
  );
}

export default Header