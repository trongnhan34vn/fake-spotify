import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import AppContext from './context/AppContext';
import ToastComp from './components/Toast/ToastComp';

function App() {
  return (
    <AppContext>
      <div className="App">
        <ToastComp />

        <Routes>
          <Route path='/auth'>
            <Route element={<Login />} path='signin' />
            <Route element={<Register />} path='signup' />
          </Route>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route element={<Playlist />} path='playlist' />
            <Route element={<Search />} path='search' />
          </Route>
        </Routes>
      </div>
    </AppContext>

  );
}

export default App;
