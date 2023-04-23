import React from 'react'
import { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import moment from 'moment';
import './Form.css';

export default function Form() {
    const[file,setFile]=useState('')
    const[author,setAuthor]=useState('')
    const[location,setLocation]=useState('')
    const[description,setDescription]=useState('')

    const imageupload = e =>{
        setFile(e.target.files[0])
    }

    const navigate = useNavigate();

    async function whensubmitted(e){
        e.preventDefault()
        const date = moment(new Date()).format("DD/MM/YYYY")
        const formData=new FormData();
        formData.append("name", author);
        formData.append("location", location);
        formData.append("description", description);
        formData.append("PostImage", file);
        formData.append("date", date);
      
        //  fetch('https://instaclone-10x-backend.herokuapp.com/api/v1/posts',{
         fetch('http://localhost:9000/api/v1/posts',{

          method:'POST',
          headers:{ },
          body: formData,
        }) 

        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(alert("Post created successfully"))
        .then(navigate('/Postview'))
    }
  return (
    <div className='formtag'>
        <form onSubmit={whensubmitted} encType='multipart/form-data'>

            <input id='fileupload' type="file" placeholder="No file Chosen" name="PostImage" onChange={imageupload}/>
        
            <input className='author' type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        
            <input className='location' type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>

            <input className='description' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        
            <button id="bttn" type="submit">Post</button>
        </form>
    </div>
  )
}
