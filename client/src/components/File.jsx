import React, { useState } from 'react'
import firebase from 'firebase/compat/app';

import { storage } from '../firebase/firebase';
export default function File() {
    const [image , setImage] = useState('');
    const upload = ()=>{
      if(image == null)
        return;
      firebase.storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed" , alert("success") , alert);
    }
      
      return (
        <div className="App">
          <center>
          <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
          <button onClick={upload}>Upload</button>
          </center>
        </div>
      );
    }

