import {React, useState, useEffect}from 'react'
import { hstorage,fstore,timestamp } from '../firebase/firebase';

import { motion } from 'framer-motion';

const Uploadfilecats = () => {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [Button, setButton] = useState(true);
    
    const types = ['image/png', 'image/jpeg'];
  
    const initialFeildValues = {
     Name:'',
     Description:''
  
    }
    const [values, setValues] = useState(initialFeildValues);
  
    const handleInputchange = e =>{
   var {name, value} = e.target
   setValues({
     ...values,
     [name]: value
   })
    }
  
    const handleChange = (e) => {
      let selected = e.target.files[0];
  
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setButton(false);
        setError('');
      } else {
        setFile(null);
        setButton(false);
        setError('Please select an image file (png or jpg)');
      }
    };
  
    const unhandlesubmit = () => {
      const storageRef = hstorage.ref(`cat-adoptions/${file.name}`);
      if(values.Name===""){
        values.Name = "A cute pet"
     }

      const collectionRef = fstore.collection('cat-adoptions');
      storageRef.put(file).on('state_changed', (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
            }, (err) => {
              setError(err);
            }, async () => {
              const url = await storageRef.getDownloadURL();
              const createdAt = timestamp();
              const Name = values.Name;
              const Description = values.Description;
              await collectionRef.add({ url, createdAt, Name, Description });
              setUrl(url);
              setValues(initialFeildValues);
              setFile(null);
              setProgress(0);
            },[file]);
            
      return { progress, url, error };
      
    }
    
   
    return (
      <div>
        <header className="header-form"><span>Input dogs Form</span></header>
      <label>Select an image if any</label><br/>
        <input type="file" onChange={handleChange} />
        <div className="output">
        { error && <div className="error">{ error }</div>}
          { file && <div>{ file.name }</div> }
          <motion.div className="Progress-Bar"
          initial={{ width: 0 }}
          animate={{ width: progress + '%' }}
        ></motion.div>
          
        </div>
         
        <br/><br/>
        <label>Name</label><br/>
        <input type="text" placeholder="Name" value={values.Name} name="Name" onChange={handleInputchange}/>
        <br/>
        <label>Description</label><br/>
        <textarea placeholder="Description" value={values.Description} onChange={handleInputchange} name="Description"/>
        <br/><br/>
       
        <button className="btn2" onClick={unhandlesubmit} disabled={Button}>Submit</button>
        <br/>
      </div>
    
        
    )
}

export default Uploadfilecats
