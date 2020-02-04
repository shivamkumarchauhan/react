import React, { Component } from 'react';
import logo from '../assets/logo.png';
import { getSectionMenu } from './utilities';

export default class Header extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  loading: false,
                  data: [],
      
            }
      }

      componentDidMount() {
            const HOST_URL = window.$HOST_URL;
            
            fetch(HOST_URL).then(result => result.json()).then(result => {
                  this.setState({
                        data: result,
                        loading: true,
                  })
            })
      }

      render(){

            let { loading, data } = this.state;
            console.log(data);

            if (!loading) {
                  return <div>Loading..</div>;
                  }

            else {
                  return (
                        <header>
                              <div className="container">
                                    <div className="logo">
                                          <a href="http://lhotsetechnologies.com/"><img src={logo} alt="No"></img></a>
                                    </div> 
                                    <div className="primary-menu">
                                          <div id="nav-icon" onclick="$(this).toggleclassName(&#39;open&#39;);$(&#39;#mobileNav&#39;).toggleclassName(&#39;show&#39;);">
                                                <span>&nbsp;</span>
                                                <span>&nbsp;</span>
                                                <span>&nbsp;</span>
                                                <span>&nbsp;</span>				
                                          </div>
                                          <div className="mobile-menu-container" id="mobileNav">
                                                <div className="left-menu split-menu">
                                                      <ul className="menu">
                                                            {data.map(item => {
                                                                  return getSectionMenu("menuLeft",item)
                                                            })}
                                                      </ul>
                                                </div>
                                                <div className="right-menu split-menu">
                                                      <ul className="menu">
                                                            {data.map(item => {
                                                                  return getSectionMenu("menuRight",item)
                                                            })}
                                                      </ul>
                                                </div> 
                                          </div>
                                    </div> 
                              </div>
                        </header>
                  );
            }
      }
}