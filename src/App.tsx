import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPublication from './components/AboutPublication';
import SearchSystem from './components/SearchSystem';
import AdminPanel from './components/AdminPanel';

function App() {

  return (
    <Router>
      <div className='header'>
        Поиск научных публикаций ВолгГТУ
      </div>
      <Routes>
            <Route path='/admin' element={<AdminPanel/>}/>
            <Route path="/" element={<SearchSystem/>} />
            <Route path="/publication/:id" element={<AboutPublication/>} />
      </Routes>
    </Router>
  )
}

export default App
