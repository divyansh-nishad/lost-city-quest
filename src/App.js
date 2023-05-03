import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Level1 from './pages/levels/Level1';
import Level2 from './pages/levels/Level2';
import Level3 from './pages/levels/Level3';
import Level4 from './pages/levels/Level4';
import Level5 from './pages/levels/Level5';
import Level6 from './pages/levels/Level6';
import Level7 from './pages/levels/Level7';
import Level8 from './pages/levels/Level8';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/level1' element={<Level1 />} />
        <Route path='/level2' element={<Level2 />} />
        <Route path='/level3' element={<Level3 />} />
        <Route path='/level4' element={<Level4 />} />
        <Route path='/level5' element={<Level5 />} />
        <Route path='/level6' element={<Level6 />} />
        <Route path='/level7' element={<Level7 />} />
        <Route path='/level8' element={<Level8 />} />
        <Route path='/admin' element={<AdminDashboard />} />
        {/* <Route path='/' element={< />} /> */}
      </Routes>
    </>
  );
}

export default App;
