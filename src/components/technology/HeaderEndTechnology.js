import React, { Component } from 'react';
import technologyLogo from '../../assets/technology.jpg';

export default class HeaderEndTechnology extends Component {

    render() {

        let styles = {
            backgroundImage: 'url(' + technologyLogo + ')',
            backgroundPosition: 'center top',
        };

        return (
            <section class="hero-section " style={styles}>
                <h1 class="bnr-heading">Technology</h1>
            </section>
        );

    }
}