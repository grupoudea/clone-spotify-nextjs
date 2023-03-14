import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="navigation-icon-container">
            <img src="media/icons/go-back.png"/>
            <img src="media/icons/go-forward.png"/>
        </div>
        <div className="auth-container">
            <div className="sign-up">
                <span>Sign up</span>

            </div>
            <div className="login-button">
                <span>Log in</span>
            </div>
        </div>
    </nav>
  )
}

export  {Navbar}