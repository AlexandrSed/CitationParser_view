import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPublication from './components/AboutPublication';
import SearchSystem from './components/SearchSystem';

function App() {

  return (
    <Router>
      <div className='header'>
        Поиск научных публикаций ВолгГТУ
      </div>
      <Routes>
            <Route path="/" element={<SearchSystem/>} />
            <Route path="/publication/:id" element={<AboutPublication/>} />
      </Routes>
    </Router>
  )
}

export default App
