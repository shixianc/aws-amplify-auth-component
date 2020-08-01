import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <link
          href='https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='https://fonts.googleapis.com/css?family=Fira+Sans'
          rel='stylesheet'
        ></link>
        <nav className='navbar navbar-light bg-light'>
          <a type='button' className='navbar-brand' href='#'>
            <div> myAuth.</div>
          </a>
          <ul className='nav'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                ABOUT
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                CAREERS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                NEWS
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled' href='#'>
                by Shixian Cui
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
