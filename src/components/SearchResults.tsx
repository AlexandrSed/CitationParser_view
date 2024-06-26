import { useState } from 'react'
import '../App.css'
import Next from '../icons/Next'
import Previous from '../icons/Previous'
import { Publication } from '../types'
import PublicationCard from './PublicationCard'

type Props = {
  publications: Publication[] | undefined,
  changePageAction: (skip: number) => void
}

function SearchResults({publications, changePageAction} : Props) {

  const [pageNumber, setPageNumber] = useState<number>(() => {
    const page = localStorage.getItem("page");

    return page == null ? 1 : parseInt(page);
  });

  return (
    <>
      <p className='head2'>Результаты поиска:</p>
      
      {
        publications == undefined || publications.length == 0 ?  
        <p>ничего не нашлось</p>
        : publications.map( p => (
          <PublicationCard publication={p}/>
        ))
      }

      <div className='Pagination'>
        <button className='previous' onClick={() => {
          if(pageNumber != 1) {
            changePageAction((pageNumber - 2)*10)
            const pageCopy = pageNumber - 1
            localStorage.setItem("page", pageCopy.toString())
            setPageNumber(pageCopy)
          }
        }}><Previous/></button>
        <b>{pageNumber}</b>
        <button className='next' onClick={() => {
          if(publications != undefined && publications.length == 10) {
            changePageAction((pageNumber)*10)
            const pageCopy = pageNumber + 1
            localStorage.setItem("page", pageCopy.toString())
            setPageNumber(pageCopy)
          }
        }}><Next/></button>
      </div>
    </>
  )
}

export default SearchResults