import React from 'react'

const Footer = () => {
  return (
    <div className='userPage__footer'>
        <div className="footer__list__icon">
            <a target="_blank" href='https://www.facebook.com' title='Facebook'><i className="bx bxl-facebook-square"></i></a>
            <a  href='tel:0123 456 789' title='Liên hệ trực tiếp'><i className='bx bx-phone'></i></a>
            <a target="_blank" href='https://github.com' title='Github'><i className='bx bxl-github'></i></a>
        </div>
        <div className="footer__title">
           Kachi Office Stationery 
        </div>
    </div>
  )
}

export default Footer