import './App.css';
import Home from './pages/home/home';
import AbcIcon from '@mui/icons-material/Abc';
import Profile from './pages/profile/profile';
import Login from './pages/login/login';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Regist from './pages/login/regist';
function App() {
  return (
    <div className="App">
     {/* <Home/> */}
    {/* <Profile/> */}
    {/* <Login/> */}
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="regist" element={<Regist />} />
      </Routes> 
    </HashRouter>
    </div>
  );
}

export default App;
