import React, { Component } from 'react';
import MainSectionOneHome from './MainSectionOneHome';
import MainSectionTwoHome from './MainSectionTwoHome';
import MainSectionThreeHome from './MainSectionThreeHome';

export default class MainHome extends Component {

    render(){

            let styles = {
                  display: 'none',
                  position: 'absolute',
                  top: '-22px', 
                  color: 'green',
                  font: '16px',
            };

            return(
                  <main className="wrapper" id="main">
                        <section className="technologies">
		                  <div className="container">
                                    <h1 className="home-heading">SERVICES</h1>
                                    <div className="techbox-container">
                                          <MainSectionOneHome />
                                          <MainSectionOneHome />
                                          <MainSectionOneHome />
                                          <MainSectionOneHome />
                                          <MainSectionOneHome />
                                    </div>
                              </div>
                        </section>

                        <section className="case-studies">
                              <div className="container">
                                    <ul className="cs-list">
                                          <li className="csheading"> 
                                                <div className="cs_box">
                                                      <h2>Case Studies</h2>
                                                      <p>Sharing our experience on developing solutions on AEM.</p>
                                                </div>
                                          </li>
                                          <MainSectionTwoHome />
                                          <MainSectionTwoHome />
                                          <MainSectionTwoHome />
                                          <MainSectionTwoHome />
                                          <MainSectionTwoHome />
                                          <MainSectionTwoHome />
                                          <MainSectionTwoHome />

                                    </ul>
                              </div>
                        </section>

                        <section className="home-blogs">
                              <div className="container">
                                    <h1 className="home-heading">From our blog</h1>
                                    <div className="blog-list">
                                          <MainSectionThreeHome />
                                          <MainSectionThreeHome />
                                          <MainSectionThreeHome />
                                          <MainSectionThreeHome />
                                          <MainSectionThreeHome />
                                          <MainSectionThreeHome />
                                    </div>
                                    <div className="button-container">
                                          <a href="https://lhotsetechnologies.com/blog/" className="submit">Go to our blog</a>
                                    </div>
                              </div>
                        </section>

                        <section className="request-container">
                              <div className="container">
                                    <div className="reqst-form">
                                          <h2>REQUEST A CONSULTATION</h2>
                                          <form method="post" name="requestaconsultation" id="requestaconsultation" action="https://www.lhotsetechnologies.com/">
                                          <div id="succesid" style={ styles }></div>
                                          <input type="email" name="email" id="email" placeholder="Please provide email id" onkeyUp="hideerrordiv(this.id);"></input>
                                          <button onClick="return validate();">submit</button>
                                          </form>
                                    </div>
                              </div>
                        </section>

                  </main>
            );
      }
}