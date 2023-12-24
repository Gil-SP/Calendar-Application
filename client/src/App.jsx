import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calendar from './Pages/Calendar';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Calendar />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}