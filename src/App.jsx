import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Caught from './views/Caught/Caught';
import Detail from "./views/Detail/Detail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CaughtProvider from './context/CaughtContext';

function App() {
    return <div className="App">
        <BrowserRouter>
            <CaughtProvider>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/caught' element={<Caught/>} />
                    <Route path='/detail/:pokemonId' element={<Detail/>} />
                </Routes>
            </CaughtProvider>
        </BrowserRouter>
        
    </div>;
}

export default App;
