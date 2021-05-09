import {useState, useEffect} from 'react';
import {fstore} from '../firebase/firebase';


const Usefirestore = (collection) => {
  const [docs, setdocs] = useState([]);

    useEffect(()=>{
     const unsub = fstore.collection(collection)
      .orderBy('createdAt','desc')
      .onSnapshot((snap)=>{
      let documents = [];
      snap.forEach(doc =>{

        documents.push({...doc.data(), id:doc.id})
      });
      setdocs(documents);

      });
      return () => unsub();

    },[collection])


    return {docs};
}

export default Usefirestore
