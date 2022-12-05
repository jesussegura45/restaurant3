import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/HomePage"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/Search"
                    >
                        Busqueda Restaurante
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/New"
                    >
                        Agregar Restaurante
                    </NavLink>

                   
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                   
                </ul>
            </div>
        </nav>
    )
}