import '../App.css'
import SearchLine from './SearchLine'


function Search() {

  return (
    <>
      <p className='head'>Поиск научных публикаций кафедры ПОАС</p>

      <SearchLine/>
      <SearchLine/>

      <div className='buttons'>
        <button className='addButton'>Добавить строку</button>
        <button className='searchButton'>Найти</button>
      </div>
    </>
  )
}

export default Search
