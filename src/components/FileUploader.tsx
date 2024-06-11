import { useRef } from 'react'; 
import '../App.css'

type Props={
  handleFile: (files: FileList|null) => void
}

export const FileUploader = ({handleFile} : Props) => { // REVISED
  const hiddenFileInput = useRef(null); 

  const handleClick = event => {
    hiddenFileInput.current.click(); 
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files;
    handleFile(fileUploaded); // ADDED
  };

  return (
  <>
    <button 
      className="addButton"
      onClick={handleClick}
    >
    Загрузить файлы
    </button>
    <input 
      type="file"
      onChange={handleChange}
      multiple
      ref={hiddenFileInput}
      style={{display:'none'}}
    />
 </>
 );
};