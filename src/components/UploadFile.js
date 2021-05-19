import {React, useState, useEffect}from 'react'
import { hstorage,fstore,timestamp } from '../firebase/firebase';
import ProgressBar from '../components/ProgressBar';



const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
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
console.log(file)

  const unhandlesubmit = () => {
    const storageRef = hstorage.ref(`dog-adoptions/${file.name}`);
    const collectionRef = fstore.collection('dog-adoptions');
    storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
          }, (err) => {
            setError(err);
          }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({ url, createdAt });
            setUrl(url);
          });
    return { progress, url, error };

  }

  return (
    <div>
      <header className="header-form"><span>Input dogs Form</span></header>
    <label>Select an image if any</label><br/>
      <input type="file" onChange={handleChange}/>
     
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
      <br/><br/>
      <label>Name</label><br/>
      <input type="text"/>
      <br/>
      <label>Description</label><br/>
      <textarea/>
      <br/><br/>
     
      <button className="btn2" onClick={unhandlesubmit}>Submit</button>
      <br/>
    </div>
  
      
  )
}

export default UploadFile
