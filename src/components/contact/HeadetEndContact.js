import React, { Component } from 'react';
import contactLogo from '../../assets/contact-3.jpg';

export default class HeaderEndContact extends Component {

      render(){

            let styles = {
                  backgroundImage: 'url(' + contactLogo + ')',
                  backgroundPosition: 'center top',
            };

            return(
                  <section className="hero-section" style={ styles }>			
                        <h1 className="bnr-heading">Contact Us</h1>
                  </section>
            );
      }
}