import './App.css';
import Sidebar from './Sidebar/Sidebar';
import MainPage from './Main Page/MainPage';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Forget from './Forget';




function App() {
    return (
        <Routes>
            <Route path='*' element={<div className='d-flex'>
                <Sidebar />
                <MainPage />
            </div>} />

            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Forget_password' element={<Forget />} />

        </Routes>
    )
}

export default App;
