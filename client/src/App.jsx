import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Yourcalendar from './Pages/Yourcalendar';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
    {/* Header */}

    <Header></Header>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/your-calendar" element={<Yourcalendar />} />

    </Routes>
  </BrowserRouter>
  )
}
