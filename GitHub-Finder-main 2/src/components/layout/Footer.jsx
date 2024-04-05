import React from 'react'
const footerYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className='footer p-10 bg-black text-primary-content footer-center'>
        <div>
            <p className='text-lg text-white'>Made by Anmol Pattnayak</p>
            <p className='text-white'>Copyright &copy; {footerYear}</p>
        </div>
    </footer>
  )
}

export default Footer