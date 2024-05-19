import '../App.css'
import DeleteIcon from '../icons/DeleteIcon'
import Select from "react-select";
import { RequestLine } from '../types'

const options = [

  { value: "Title"          , label: "Заглавие" },
  { value: "Author"         , label: "Автор" },
  { value: "Year"           , label: "Год выпуска" },
  { value: "Type"           , label: "Тип публикации" },
  { value: "TitleOfSource"  , label: "Название источника" },
  { value: "DOI"            , label: "DOI" },
  { value: "City"           , label: "Город" },
  { value: "University"     , label: "Университет" }
];

type Props = {
  criteria: RequestLine,
  deleteAction: any,
  onChangeSelect: any,
  onChangeLine: any

}

function SearchLine({criteria, deleteAction, onChangeSelect, onChangeLine}: Props) {

  return (
      <div className='requestLine'>

        <Select
          className='select'
          value={{value: criteria.criteriaValue, label: criteria.criteriaLabel}}
          onChange={onChangeSelect}
          options={options}>
        </Select>

        <input type="text" placeholder='Введите значение' onChange={onChangeLine} value={criteria.value}/>
        
        {criteria.id >= 2 ?
        <button className='DeleteBtn' onClick={deleteAction}><DeleteIcon/></button>
        :<></>}
      </div>
  )
}

export default SearchLine
