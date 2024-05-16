import '../App.css'


function SearchLine() {

  return (
      <div className='requestLine'>
        <select>
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
        <input type="text" placeholder='Введите значение'/>
      </div>
  )
}

export default SearchLine
