import '../App.css'
import { Publication } from '../types'

type Props = {
  publication: Publication
}

function PublicationCadr({publication} : Props) {

  return (
    <div className='publicationCard'>
        <p>Название статьи: {publication.title}</p>
        <p>Авторы статьи: {publication.idAuthors.map(a => a.name + ", ")}</p>
    </div>
  )
}

export default PublicationCadr