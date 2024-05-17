import { useState } from 'react';
import '../App.css'
import SearchLine from './SearchLine'
import { Criteria } from '../types';


function Search() {

  const [criteria, setCriteria] = useState<Criteria[]>([{id: 0, value: "Title", label: "Заглавие"},
   {id: 1, value: "Title", label: "Заглавие"}]);

  return (
    <>
      <p className='head'>Поиск научных публикаций кафедры ПОАС</p>

      {criteria.map((Cr) => (<SearchLine criteria={Cr} 
      
      deleteAction={()=>setCriteria(criteria.filter(c => c.id !== Cr.id))}

      onChangeAction={(selectedCriteria: {value: string, label: string}) => {

        const arr = criteria.slice();
        arr[arr.indexOf(Cr)] = {id: Cr.id, value: selectedCriteria.value, label: selectedCriteria.label}
        setCriteria(arr)

      } }/>))}

      <div className='buttons'>
        <button className='addButton' onClick={()=>{ 
            
          if(criteria.length != 8)

            setCriteria(criteria.concat({id: criteria[criteria.length-1].id + 1, value: "Title", label: "Заглавие"}))

          }}>Добавить строку</button>

        <button className='searchButton'>Найти</button>
      </div>
    </>
  )
}

export default Search
