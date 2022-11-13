import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Caught from './views/Caught/Caught';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from "./views/Detail/Detail";

function App() {
    return <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/caught' element={<Caught/>} />
                <Route path='/detail/:pokemonId' element={<Detail/>} />
            </Routes>
        </BrowserRouter>
        
    </div>;
}

export default App;
