import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import ErrorPage from './page/ErrorPage';
import ProductPage from './page/ProductPage';



function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element=<HomePage/> />
            <Route path='/*' element=<ErrorPage/> />
            <Route path='/product' element=<ProductPage/> />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
