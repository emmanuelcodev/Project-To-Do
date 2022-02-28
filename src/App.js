import React, { useState } from 'react';
//import logo from './logo.svg';
import {sites} from './data/data'
import './App.css';
import './css/index.css'


function App() {
  const [websites, setWebsites] = useState(sites);

  const removeItem = (sid)=> {
    const reducedList = websites.filter((site)=> site.id !== sid)
    setWebsites(reducedList)
    
  }
  return (
  <div className="container">
    <h1>Links</h1>
     {
      websites.map((site) => {
        const sid = site.id
        return (
        <div >
          
          <a href={site.url} target="_blank" >
            <div className='site'>
            <img src={site.img_url} alt={site.name} />
           
            <p className = 'inlineP'>{site.name}</p>
             </div>
          </a>
         
          <button onClick={()=>removeItem(sid)}>Remove</button>
          
        </div>
        )
       }
    
      )
        
    }
      </div>
  
  )
  }

export default App;
