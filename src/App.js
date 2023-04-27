import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';


function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element=<HomePage/> />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
