import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing_page from './Landing_page';
import Postview from './../Postview';
import Form from '../Components/Form';
import Landing from './Landing';

export default function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="postview" element={<Postview/>} />
                <Route path="/form" element={<Form/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
