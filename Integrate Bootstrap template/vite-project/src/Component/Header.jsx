import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Hi, I'm John Deo.</h1>
            <h3>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h3>
            <Button className='mt-5' variant="primary">I'm Available</Button>
            <br /><br /><br />
            <FaFacebook className="me-3" size={20} />
            <FaTwitter className="me-3" size={20} />
            <FaInstagram className="me-3" size={20} />
            <FaGithub size={20} />
          </div>
          <div className='col'>
            <img src='https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg' alt='Profile' width={500} height={500}></img>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Header;
