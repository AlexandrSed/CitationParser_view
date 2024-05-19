import { useState } from 'react';
import './App.css'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import { Publication } from './types';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [publications, setPublications] = useState<Publication[]>()

  return (
    <>
      <Search searchAction={(event, request) => {
        let requestString = 'http://localhost:5000/api/publication/publications?'

        request.map( r => r.value != "" ? 
           requestString = requestString.concat(r.criteriaValue + "=" + r.value + "&") : 1)

           console.log(requestString)

        fetch(requestString + "limit=10&api-version=1.0")
        .then((response) => {
          if (response.ok) return response.json()
          throw new Error('Request failed.')
        })
        .then((json) => {
          setPublications( json );
        })
        .catch((error) => {
          console.log(error)
        })
      }}/>
      <SearchResults publications={publications}/>
      {/* <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/starships" element={<Starships />} />

      </Routes> */}
    </>
  )
}

export default App
