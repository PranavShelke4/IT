import React from 'react'
import "./LoginPage.css"
import loginIcon from "../../assets/icon/login-icon.svg"

function LoginPage() {
  return (
    <div className='LoginPage'>
        <h3 className='IT-MS'>IT MANAGEMENT SYSTEM</h3>
        <h5 className='GPA'>GOVERNMENT POLYTECHNIC, AWASARI (KH)</h5>
        <img className='login-icon' src={loginIcon} alt='' />
        <h4 className='log'>Login</h4>
        <div className='tabsss'>
        
        </div>
    </div>
  )
}

export default LoginPage