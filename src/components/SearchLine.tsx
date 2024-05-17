import '../App.css'
import DeleteIcon from '../icons/DeleteIcon'
import Select from "react-select";
import { Criteria } from '../types'

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
  criteria: Criteria,
  deleteAction: any,
  onChangeAction: any

}

function SearchLine({criteria, deleteAction, onChangeAction}: Props) {

  return (
      <div className='requestLine'>
        <Select
          className='select'
          value={{value: criteria.value, label: criteria.label}}
          onChange={onChangeAction}
          options={options}>
        </Select>
        <input type="text" placeholder='Введите значение'/>
        {criteria.id >= 2 ?
        <button className='DeleteBtn' onClick={deleteAction}><DeleteIcon/></button>
        :<></>}
      </div>
  )
}

export default SearchLine
