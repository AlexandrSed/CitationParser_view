import { useEffect, useState } from 'react';
import './App.css'
import Search from './components/Search'
import SearchResults from './components/SearchResults'
import { Publication } from './types';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [publications, setPublications] = useState<Publication[]>()

  const [serverUrl, setServerUrl] = useState<string>('http://localhost:5000/api/publication/publications?limit=10&api-version=1.0');

  useEffect(() => {
    fetch(serverUrl)
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
  },[serverUrl]);

  return (
    <>
      <Search searchAction={(event, request) => {
        let requestString = 'http://localhost:5000/api/publication/publications?limit=10&api-version=1.0'

        request.map( r => r.value != "" ? 
           requestString = requestString.concat("&" + r.criteriaValue + "=" + r.value) : 1)

           console.log(requestString)

        setServerUrl(requestString)
        
      }}/>
      <SearchResults publications={publications} changePageAction={(skip) => {
          const urlTmp = serverUrl.replace(/&skip=\d+/g, "");
          setServerUrl(urlTmp + '&skip=' + skip)
        }}/>
      {/* <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/starships" element={<Starships />} />

      </Routes> */}
    </>
  )
}

export default App
