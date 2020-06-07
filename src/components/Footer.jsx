import React, { Component } from 'react';
import { footer, footerIcon } from './utilities/utilities';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            icon: [],
        }
    }

    componentDidMount() {
        const HOST_URL = window.$HOST_URL;
        const FOOTER = window.$FOOTER
        const FOOTER_ICON = window.$FOOTER_ICON

        fetch(HOST_URL + FOOTER)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result,
            })
        })

        fetch(HOST_URL + FOOTER_ICON)
        .then(result => result.json())
        .then(result => {
            this.setState({
                icon: result,
            })
        })

    }

    render(){

        let { data, icon } = this.state;

        return(
            <footer>
                <div className="container">
                    <div className="footer-menu">
                        <ul className="main-menu">
                            {
                                data.map(item => {
                                    return footer(item);
                                })
                            }
                        </ul>
                        <ul className="submenu" style={{display: 'none'}}>
                            <li><a href="https://www.lhotsetechnologies.com/#">SERVICES<span className="hidemobile">//</span></a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#">AEM Migration and Updates </a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#">AEM assets </a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#">AEM sites </a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#">AEM with WCS</a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#">AEM forms  </a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#">ADOBE analytics </a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#"> AEM hybris  </a></li>
                            <li><a href="https://www.lhotsetechnologies.com/#"> AEM with AI <span className="hidemobile">//</span></a></li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            {
                                icon.map(item => {
                                    return footerIcon(item);
                                })
                            }
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}