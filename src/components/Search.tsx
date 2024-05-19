import { useState } from 'react';
import '../App.css'
import SearchLine from './SearchLine'
import { RequestLine } from '../types';

type Props = {
  searchAction: any
}

function Search({searchAction} : Props) {

  const [criteria, setCriteria] = useState<RequestLine[]>([{id: 0, criteriaValue: "Title", criteriaLabel: "Заглавие", value: ""},
   {id: 1, criteriaValue: "Title", criteriaLabel: "Заглавие", value: ""}]);

  return (
    <>
      <p className = 'head'>Поиск научных публикаций кафедры ПОАС</p>

      {criteria.map((Cr) => (<SearchLine criteria={Cr} 
      
      deleteAction = {() => setCriteria(criteria.filter(c => c.id !== Cr.id))}

      onChangeSelect = {(selectedCriteria: {value: string, label: string}) => {

        const arr = criteria.slice();
        arr[arr.indexOf(Cr)] = {
          id: Cr.id, 
          criteriaValue: selectedCriteria.value, 
          criteriaLabel: selectedCriteria.label, 
          value: Cr.value
        }
        setCriteria(arr)
      }}

      onChangeLine = {(event) => {
        const arr = criteria.slice();
        arr[arr.indexOf(Cr)] = {
          id: Cr.id, 
          criteriaValue: Cr.criteriaValue, 
          criteriaLabel: Cr.criteriaLabel, 
          value: event.target.value
        }
        setCriteria(arr)
      }}
      />))}

      <div className = 'buttons'>
        <button className = 'addButton' onClick={() => { 
            
          if(criteria.length != 8)

            setCriteria(criteria.concat({
              id: criteria[criteria.length - 1].id + 1,
              criteriaValue: "Title",
              criteriaLabel: "Заглавие",
              value: ""
            }))

          }}>Добавить строку</button>

        <button className='searchButton' onClick={searchAction}>Найти</button>
      </div>
    </>
  )
}

export default Search
