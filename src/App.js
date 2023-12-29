
import './App.css';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import ApplicationNav from './component/ApplicationNav';
import LogIn from './pages/LogIn';
import Home from './pages/Home';
import TableGrid from './pages/TableGrid';
function App() {
  return (
<>

    <ApplicationNav/>
    <Routes>

      <Route path='/' element={<Registration></Registration>}/>
      <Route path='/LogIn' element={<LogIn></LogIn>}/>
      <Route path='/Home' element={<Home></Home>}/>
      <Route path='/TableGrid' element={<TableGrid></TableGrid>}/>

    </Routes>
</>
   
  );
}

export default App;
