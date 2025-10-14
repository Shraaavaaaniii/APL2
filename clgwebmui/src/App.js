import MyAppBar from './components/MyAppBar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPagination from './components/MyPagination'
import Footer from "./components/Footer"
import {Container} from '@mui/material';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
      <MyAppBar/>
      <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </Container>
      <Footer/>
      <MyPagination/>
    </BrowserRouter>
  );
}

export default App;
