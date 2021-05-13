import {React, useState, useEffect}from 'react'
import { hstorage } from '../firebase/firebase';


const UploadFile = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const unhandlechange = e =>{
    if(e.target.files[0]){
      setImage(e.target.files[0])
    }
     
  }
  console.log("image: ", image);

  const unhandlesubmit = () => {

    const uploadTask = hstorage.ref(`dog-adoptions/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        hstorage
          .ref("dog-adoptions")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
      
    );

  }

  return (
    <form>
      <header className="header-form"><span>Input dogs Form</span></header>
    <label>Select an image if any</label><br/>
      <input type="file" onChange={unhandlechange}/>
      <div> Preview Images</div>
      <br/><br/>
      <label>Name</label><br/>
      <input type="text"/>
      <br/>
      <label>Description</label><br/>
      <textarea/>
      <br/><br/>
      <button className="btn2" onClick={unhandlesubmit}>Submit</button>
      <br/>
    </form>
  
      
  )
}

export default UploadFile
