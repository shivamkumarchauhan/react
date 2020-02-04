import React, { Component } from 'react';
import MainSectionOne from './MainSectionOne';
import MainSectionTwo from './MainSectionTwo';
import MainSectionThree from './MainSectionThree';

export default class Main extends Component {

    render(){

            let styles = {
                  display: 'none',
                  position: 'absolute',
                  top: '-22px', 
                  color: 'green',
                  font: '16px',
            };

            return(
                  <main class="wrapper" id="main">
                        <section class="technologies">
		                  <div class="container">
                                    <h1 class="home-heading">SERVICES</h1>
                                    <div class="techbox-container">
                                          <MainSectionOne />
                                          <MainSectionOne />
                                          <MainSectionOne />
                                          <MainSectionOne />
                                          <MainSectionOne />
                                    </div>
                              </div>
                        </section>

                        <section class="case-studies">
                              <div class="container">
                                    <ul class="cs-list">
                                          <li class="csheading"> 
                                                <div class="cs_box">
                                                      <h2>Case Studies</h2>
                                                      <p>Sharing our experience on developing solutions on AEM.</p>
                                                </div>
                                          </li>
                                          <MainSectionTwo />
                                          <MainSectionTwo />
                                          <MainSectionTwo />
                                          <MainSectionTwo />
                                          <MainSectionTwo />
                                          <MainSectionTwo />
                                          <MainSectionTwo />

                                    </ul>
                              </div>
                        </section>

                        <section class="home-blogs">
                              <div class="container">
                                    <h1 class="home-heading">From our blog</h1>
                                    <div class="blog-list">
                                          <MainSectionThree />
                                          <MainSectionThree />
                                          <MainSectionThree />
                                          <MainSectionThree />
                                          <MainSectionThree />
                                          <MainSectionThree />
                                    </div>
                                    <div class="button-container">
                                          <a href="https://lhotsetechnologies.com/blog/" class="submit">Go to our blog</a>
                                    </div>
                              </div>
                        </section>

                        <section class="request-container">
                              <div class="container">
                                    <div class="reqst-form">
                                          <h2>REQUEST A CONSULTATION</h2>
                                          <form method="post" name="requestaconsultation" id="requestaconsultation" action="https://www.lhotsetechnologies.com/">
                                          <div id="succesid" style={styles}></div>
                                          <input type="email" name="email" id="email" placeholder="Please provide email id" onkeyup="hideerrordiv(this.id);"></input>
                                          <button onclick="return validate();">submit</button>
                                          </form>
                                    </div>
                              </div>
                        </section>

                  </main>
            );
      }
}