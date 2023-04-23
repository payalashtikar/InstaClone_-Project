import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="head">
      {/* <img className='instagram' src="https://1iwky71fbek0h7wy43b8a0i2-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/Instagram-Text.png" alt='instagram img' /> */}
    
      <img className='instagram' src="https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2020/12/instagram-new.png?resize=1100%2C750&ssl=1" alt='instagram img' />
      {/* <img className='instagram' src="../../public/Images/instagram.png" alt='instagram img' /> */}
      
      <Link to='/form'>
          <img className='logo' src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="cameraIcom img"/>
          
      </Link>
    </div>
  )
}
