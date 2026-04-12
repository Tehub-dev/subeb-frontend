import React from 'react';
import useSelectFile from "../../hooks/UseSelectFile";

import "./doc-upload.css";

const DocUpload = ({error}) => {
  
  const {selectedFile, setSelectedFile} = useSelectFile();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <>
    <label className='upload-doc'>
      {!selectedFile && <p>Click to upload your files</p> } 
      <input type="file" accept=".pdf" onChange={handleFileChange} style={{display: "none"}} />
      {selectedFile && (
        <div className='select-file'>
          <p>Selected file: <br /> {selectedFile.name}</p>
        </div>
      )}
    </label>
    <h5 style={{color: "red", paddingTop: "5px"}}>{error}</h5>
    </>
  )
}

export default DocUpload