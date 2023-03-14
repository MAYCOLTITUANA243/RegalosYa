import { Outlet, Link } from 'react-router-dom';

const Layout = () =>{
    return <div className="App" class="bg-light">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/productos">Ingreso de Productos</Link>
                </li>
                <li>
                    <Link to="/productoSalida">Ingreso de Productos</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}
export default Layout;