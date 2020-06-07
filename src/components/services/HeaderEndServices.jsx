import React, { Component } from 'react';
import servicesLogo from '../../assets/services.jpg';

export default class HeaderEndServices extends Component {

      render(){

            let styles = {
                  backgroundImage: 'url(' + servicesLogo + ')',
                  backgroundPosition: 'center top',
            };

            return(
                  <section class="hero-section" style={ styles }>			
                        <h1 class="bnr-heading">Services</h1>
                  </section>
            );
      }
}