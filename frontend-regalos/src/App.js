import './App.css'
import { Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import IngresoAdorno from './pages/ingresoAdorno';
import Catalogo from './pages/productoSalida';
import Home from './pages/home';
import Logo from './img/logo.jpeg';
function App(){
  return(
    <div className="App" class="bg-light">
      <div style={{
      display: 'flex',
      justifyContent: 'center'
      }}>
        <img src={Logo} alt="Descripción de la imagen" 
        style={{
          alignContent:'center',
          width: '100%',
          height: '250px',
        }}/>
      </div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
          <Route path='/productos' element={<IngresoAdorno/>}/>
        </Route>
      </Routes>
    </div>
  )
}
export default App;