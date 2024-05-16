import './App.css'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  return (
    <>
      <Search/>
      <SearchResults/>
      {/* <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/starships" element={<Starships />} />

      </Routes> */}
    </>
  )
}

export default App
