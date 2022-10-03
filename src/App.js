import './index.css';
import './styles.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navbar';
import NotFound from './views/NotFound';
import Home from './views/Home';
import Personajes from './views/Personajes';


function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Navigation/>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/personajes/:name" element={<Personajes/>} /> 
    <Route path="*" element={<NotFound/>} />
    </Routes>
      
    </BrowserRouter>  
       
    </div>
  );
}

export default App;
