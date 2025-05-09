import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Training from './components/Training/Training';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Training" element={<Training/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}


export default App;
