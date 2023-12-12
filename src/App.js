import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import ApplicationNav from './component/ApplicationNav';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
function App() {
  return (
    <Container>

    <ApplicationNav/>
    <Routes>

      <Route path='/' element={<Registration></Registration>}/>
      <Route path='/LogIn' element={<LogIn></LogIn>}/>
      <Route path='/Home' element={<Home></Home>}/>

    </Routes>

    </Container>
  );
}

export default App;
