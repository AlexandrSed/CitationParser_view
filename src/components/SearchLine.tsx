import '../App.css'
import DeleteIcon from '../icons/DeleteIcon'
import Select, { SingleValue } from "react-select";
import { RequestLine } from '../types'
import { ChangeEventHandler } from 'react';

const options = [

  { value: "title"          , label: "Заглавие" },
  { value: "author"         , label: "Автор" },
  { value: "year"           , label: "Год выпуска" },
  { value: "type"           , label: "Тип публикации" },
  { value: "titleOfSource"  , label: "Название источника" },
  { value: "doi"            , label: "DOI" },
  { value: "city"           , label: "Город" },
  { value: "university"     , label: "Университет" }
];

type Props = {
  criteria: RequestLine,
  deleteAction: () => void,
  onChangeSelect: (selectedCriteria: SingleValue<{
      value: string;
      label: string;
    }>) => void,
  onChangeLine: ChangeEventHandler<HTMLInputElement>

}

function SearchLine({criteria, deleteAction, onChangeSelect, onChangeLine}: Props) {

  return (
      <div className='requestLine'>

        <Select
          className='select'
          value={{value: criteria.criteriaValue, label: criteria.criteriaLabel}}
          onChange={ e => onChangeSelect(e)}
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
