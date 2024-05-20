import { Link } from 'react-router-dom'
import '../App.css'
import { Publication } from '../types'

type Props = {
  publication: Publication
}

function PublicationCard({publication} : Props) {

  return (
    <Link to={"/publication/" + publication.id} state={publication}>
      <div className='publicationCard'>
          <p>Название статьи: {publication.title}</p>
          <p>Авторы статьи: {publication.idAuthors.map(a => a.name + ", ")}</p>
      </div>
    </Link>
  )
}

export default PublicationCard