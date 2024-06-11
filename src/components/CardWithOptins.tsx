import { useState } from 'react'
import '../App.css'
import { FileUploader } from './FileUploader'
import FileIcon from '../icons/FileIcon';



function CardWithOptions() {

  const [documents, setDocuments] = useState<FileList>();

  return (
    <div className='publicationCard'>
        <p>Название статьи: Очень важное исследование</p>

        <p>Авторы: Иванов И. И.</p>
        <div className='filesUploaded'>
        <FileUploader handleFile={files => {files != null ? setDocuments(files) : 1}}></FileUploader>
        {
          documents == undefined || documents.length == 0 ?
          <></> :
          <span className='fileName'><FileIcon/>{documents[0].name}</span>
        }
          <span className='fileName'><FileIcon/>Экспертное заключение.pdf</span>
          <span className='fileName'><FileIcon/>Экспортное заключение.pdf</span>
        </div>
        <p>Уточнить автора (Иванов И. И.):</p>
        <p>Полное имя автора</p><input type="text" />
        <p>Отчество автора</p><input type="text" />
        <p>Должность автора</p><input type="text" />
    </div>
  )
}

export default CardWithOptions