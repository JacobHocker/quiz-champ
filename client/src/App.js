import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/home/Home';
import Nav from './Components/nav/Nav';

function App() {
  

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </div>
  );
}

export default App;
