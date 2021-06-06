import {useState, useEffect} from 'react';
import {fstore} from '../firebase/firebase';


const Usefirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  const [loading3, setloading3] = useState(false);

  useEffect(() => {
    setloading3(true);
    const unsub = fstore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
        setloading3(false);
      });

    return () => unsub();
    
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);
  
  return { docs , loading3};
}

export default Usefirestore
