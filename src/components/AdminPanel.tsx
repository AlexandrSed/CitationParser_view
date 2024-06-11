import '../App.css'
import CardWithOptions from './CardWithOptins'



function AdminPanel() {

  return (
    <div className='container'>
        <p className='head'>Новые публикации</p>
        <CardWithOptions/>
        <button className='searchButton'>Сохранить</button>
    </div>
  )
}

export default AdminPanel