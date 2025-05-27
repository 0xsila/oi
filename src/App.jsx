import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import EmailVer from './email-ver';
import VerCode from './ver-code';
import Signup from './signup';
import ChangePassword from './changepass';
import Card from './card';
import Hotel from './Hotel';
import Car from './Car';
import Rental from './Rental';
import Home from './Home';
import AuthSuccess from './AuthSuccess';
import Profile from './profile';
import HotelDetails from './components/HotelDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/cars/:id" element={<Car />} />
        <Route path="/homes/:id" element={<Rental />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/car" element={<Car />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-ver" element={<EmailVer />} />
        <Route path="/ver-code" element={<VerCode />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/auth/success" element={<AuthSuccess />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;