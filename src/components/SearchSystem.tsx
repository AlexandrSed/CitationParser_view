import { useEffect, useState } from 'react';
import '../App.css'
import Search from '../components/Search'
import SearchResults from '../components/SearchResults'
import { Publication } from '../types';

function SearchSystem() {

    const [publications, setPublications] = useState<Publication[]>()

    const [serverUrl, setServerUrl] = useState<string>(() => {
      const url = localStorage.getItem("url");
      return url == undefined ?
        'http://localhost:5000/api/publication/publications?limit=10&api-version=1.0' :
        url;
    });
  
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
      <div className='container'>
        <Search searchAction={(event, request) => {
          let requestString = 'http://localhost:5000/api/publication/publications?limit=10&api-version=1.0'
  
          request.map( r => r.value != "" ? 
             requestString = requestString.concat("&" + r.criteriaValue + "=" + r.value) : 1)

          localStorage.setItem("url", requestString)
          setServerUrl(requestString)
          
        }}/>
        <SearchResults publications={publications} changePageAction={(skip) => {
            const urlTmp = serverUrl.replace(/&skip=\d+/g, "");

            localStorage.setItem("url", urlTmp + '&skip=' + skip)

            setServerUrl(urlTmp + '&skip=' + skip)
          }}/>
    </div>
  )
}

export default SearchSystem

