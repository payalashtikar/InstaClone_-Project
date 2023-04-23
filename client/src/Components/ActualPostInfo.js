import React from 'react'
import { useState,useEffect } from 'react';
import './ActualPostInfo.css';
import Header from './Header';
import PostInfo from './PostInfo';




export default function ActualPostInfo() {
  const [items, setItems] = useState([]);
    useEffect(() => {
        // fetch("https://instaclone-10x-backend.herokuapp.com/api/v1/posts")
        fetch("http://localhost:9000/api/v1/posts")
          .then(res => res.json())
          .then((result) => {
            setItems(result.posts);
            }
          )
      }, [])
    console.log(items)
  return (<>
      <div className='headmain'>
        <Header/>
      </div>
      <section className='card-section'>
        {items.map((itemcontents)=>(
          <PostInfo itemcontents={itemcontents}/>
        ))}
      </section>
</>
  )
}