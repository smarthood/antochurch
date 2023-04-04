import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Main from './Pages/Main';
import programs from './Pages/programs';
import Navbar from './components/Navbar';
import Donate from './Pages/Donate';
import History from './Pages/History';
import News from './Pages/News';
import Gallery from './Pages/Gallery';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/program' Component={programs} />
        <Route path='/gallery' Component={Gallery} />
        <Route path='/news' Component={News} />
        <Route path='/history' Component={History} />
        <Route path='/donate' Component={Donate} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
