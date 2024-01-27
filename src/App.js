import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import InitialPage from './pages/InitialPage';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
