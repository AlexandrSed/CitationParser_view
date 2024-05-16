import '../App.css'
import PublicationCard from './PublicationCard'


function SearchResults() {

  return (
    <>
      <p className='head2'>Результаты поиска:</p>
      <PublicationCard/>
      <PublicationCard/>
      <PublicationCard/>
    </>
  )
}

export default SearchResults