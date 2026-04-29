import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './page/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      {/*  other page content  */}
    </BrowserRouter>
  );
}

export default App;