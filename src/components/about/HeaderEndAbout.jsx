import React, { Component } from 'react';
import aboutLogo from '../../assets/about-us.jpg';

export default class HeaderEndAbout extends Component {

      render(){

            let styles = {
                  backgroundImage: 'url(' + aboutLogo + ')',
                  backgroundPosition: 'center top',
            };

            return(
                  <section class="hero-section" style={ styles }>			
                        <h1 class="bnr-heading">About Us</h1>
                  </section>
            );
      }
}