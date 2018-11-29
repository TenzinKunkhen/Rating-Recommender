import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="ui secondary  menu">
                    <div >
                        {loggedIn ? (
                            <section>
                                <Link to="#" className="active item"onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>
                        ) : (
                                <div>
                                    <Link to="/" className="item">
                                        <span className="text-secondary">home</span>
                                        </Link>
                                    <Link to="/login" className="item">
                                    <span className="text-secondary">login</span>
				</Link>
                                    <Link to="/signup" className="item">
                                    <span className="text-secondary">sign up</span>
				</Link> 
                            </div>
                            )}
                    </div>
                    <div>
                    <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">MERN Passport</h1>
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar