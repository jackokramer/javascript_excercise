import React from 'react'
import logo from '../images/logo.svg';


 export default function Header(){
  return (
    <div>
        <div className="support">
            <p className="support-p">Support Ukraine 🇺🇦
              <a href="https://opensource.facebook.com/support-ukraine"> Help Provide Humanitarian Aid to Ukraine.</a>
            </p>
        </div>
      <nav>
          <div className="one">
          <img src={logo} className="App-logo" width="200px" />
          <h3 className="Title">React Facts</h3>
          </div>
          <div className="two">
             <h4>React Course - Project 1 </h4>
              <ul className="list-items">
                <li><a href="https://">About</a></li>
                <li><a href="https://">Pricing</a></li>
                <li><a href="https://">More Info</a></li>
              </ul>
            </div>
      </nav>
    </div>
  )
}

