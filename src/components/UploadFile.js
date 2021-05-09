import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

import { useDropzone } from 'react-dropzone'
import "./all.css"


// const containerStyle = {
//   background: '#dadada',
//   width: 250,
//   height: 250,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: 50,
//   textAlign: 'center',
// }

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
 
}


export default Upload;