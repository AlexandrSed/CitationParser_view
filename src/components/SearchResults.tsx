import { useState } from 'react'
import '../App.css'
import Next from '../icons/Next'
import Previous from '../icons/Previous'
import { Publication } from '../types'
import PublicationCard from './PublicationCard'

type Props = {
  publications: Publication[] | undefined
}

function SearchResults({publications} : Props) {

  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <p className='head2'>Результаты поиска:</p>
      
      {
        publications == undefined ?  
        <p>ничего не нашлось</p>
        : publications.map( p => (
          <PublicationCard publication={p}/>
        ))
      }

      <div className='Pagination'>
        <button className='previous'><Previous/></button>
        <b>{pageNumber}</b>
        <button className='next' ><Next/></button>
      </div>
    </>
  )
}

export default SearchResults