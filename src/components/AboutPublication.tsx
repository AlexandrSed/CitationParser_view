import { Link, useLocation } from 'react-router-dom'
import '../App.css'
import { Publication } from '../types'
import FileIcon from '../icons/FileIcon'

function AboutPublication() {

  const location = useLocation()
  const publication : Publication = location.state

  return (
      <div className='container'>
      <p className = 'head'>Информация о публикации</p>

        { publication.title == null ? <></>: <p><b>Название статьи:         </b> {publication.title}</p>}
        { publication.idAuthors.length == 0 ? <></>: <p><b>Авторы статьи: </b> {
          publication.idAuthors.map(a => a.name + '; ')
        }</p>}
        { publication.year == null ? <></>: <p><b>Год выпуска статьи:      </b> {publication.year}</p>}
        { publication.url == null ? <></>: <p><b>URL:                     </b> {publication.url}</p>}
        { publication.doi == null ? <></>: <p><b>DOI:                     </b> {publication.doi}</p>}
        { publication.articleNumber == null ? <></>: <p><b>Номер статьи:         </b> {publication.articleNumber}</p>}
        { publication.countOfPages == null ? <></>: <p><b>Количество страниц: </b> {publication.countOfPages}</p>}
        { publication.country == null ? <></>: <p><b>Страна:         </b> {publication.country}</p>}
        { publication.dataStorage == null ? <></>: <p><b>Носитель данных:         </b> {publication.dataStorage}</p>}
        { publication.dateIntroduction == null ? <></>: <p><b>Дата введения: </b> {publication.dateIntroduction}</p>}
        { publication.dateOfRegistration == null ? <></>: <p><b>Дата регистрации: </b> {publication.dateOfRegistration}</p>}
        { publication.idCities.length == 0 ? <></>: <p><b>Город:         </b> {
          publication.idCities.map( c => c.name + '; ')
        }</p>}
        { publication.idEditors.length == 0 ? <></>: <p><b>Редакторы:         </b> {
          publication.idEditors.map( e => e.name + '; ')
        }</p>}
        { publication.idScientificCollection.length == 0 ? <></>: <p><b>Научный сборник: </b> {
          publication.idScientificCollection.map( sc => sc.title
        )}</p>}
        { publication.idUniversities.length == 0 ? <></>: <p><b>Университет: </b> {
          publication.idUniversities.map( u => u.name)
        }</p>}
        { publication.information == null ? <></>: <p><b>Информация:         </b> {publication.information}</p>}
        { publication.informationAboutPublication == null ? <></>: <p><b>Информация о публикации: </b> {
          publication.informationAboutPublication
        }</p>}
        { publication.language == null ? <></>: <p><b>Язык:         </b> {publication.language}</p>}
        { publication.number == null ? <></>: <p><b>Номер выпуска:         </b> {publication.number}</p>}
        { publication.numberOfVolumes == null ? <></>: <p><b>Количество томов:       </b> {publication.numberOfVolumes}</p>}
        { publication.pageNumbers == null ? <></>: <p><b>Количество страниц:         </b> {publication.pageNumbers}</p>}
        { publication.placeOfRegistration == null ? <></>: <p><b>Место регистрации:  </b> {publication.placeOfRegistration}</p>}
        { publication.publishingHouse == null ? <></>: <p><b>Издательство:         </b> {publication.publishingHouse}</p>}
        { publication.registrationNumber == null ? <></>: <p><b>Номер регистрации:         </b> {publication.registrationNumber}</p>}
        { publication.rightHolder == null ? <></>: <p><b>Правообладатель:         </b> {publication.rightHolder}</p>}
        { publication.titleOfSource == null ? <></>: <p><b>Название источника:         </b> {publication.titleOfSource}</p>}
        { publication.volumeNumber == null ? <></>: <p><b>Номер тома:         </b> {publication.volumeNumber}</p>}

        <div className='download'><a href=""><FileIcon/> Экспертное заключение.pdf</a></div>
        <div className='download'><a href=""><FileIcon/> Экспортное заключение.pdf</a></div>

        <Link to={"/"}><button className='addButton'>Вернуться к поиску</button></Link>
      </div>
  )
}

export default AboutPublication

