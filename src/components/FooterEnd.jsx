import React, { Component } from 'react';
import { footerEnd } from './utilities/utilities';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const HOST_URL = window.$HOST_URL;
        const FOOTER_END = window.$FOOTER_END

        fetch(HOST_URL + FOOTER_END)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            })
    }

    render() {

        let rows = [
            {
                "linkName": "/aem-as-pim",
                "title": "AEM as PIM"
            },
            {
                "linkName": "/aem-migration-5.6-to-6.4",
                "title": "AEM Migration 5.6 to 6.4"
            },
            {
                "linkName": "/aem-site-performance-optimization.php",
                "title": "AEM Site Performance Optimization"
            },
            {
                "linkName": "/aem-site-security.php",
                "title": "AEM Site Security"
            },
            {
                "linkName": "/aem-with-cdn",
                "title": "AEM with CDN Networks (Cloudflare, CloudFront, Akamai)"
            },
            {
                "linkName": "/aem-with-third-party-integration",
                "title": "AEM with Content Translation Services"
            },
            {
                "linkName": "/aem-with-wcs",
                "title": "AEM with WCS"
            }
        ]


        let { data } = this.state;
        let row = [];
        for (let i = 0; i < data.length -4; i++) {
            row.push(data[i])
        }
        
        console.log(row);

        return (
            <React.Fragment>
                <div className="offerd-services-cont" style={{ align: 'center' }}>
                    <div className="container">
                        <ul>
                            {
                                row.map(item => {
                                    return footerEnd(item)
                                })
                            }
                        </ul>
                        <ul>
                            <li><a href="http://lhotsetechnologies.com/aem-with-third-party-integration">AEM with Content Translation Services</a></li>
                            <li><a href="https://lhotsetechnologies.com/aem-site-performance-optimization.php">AEM Site Performance Optimization</a></li>
                        </ul>
                        <ul>
                            <li><a href="https://lhotsetechnologies.com/aem-site-security.php">AEM Site Security </a></li>
                            <li><a href="http://lhotsetechnologies.com/aem-with-cdn">AEM with CDN Networks (Cloudflare, CloudFront, Akamai) </a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">© 2019 Lhotse Technologies All Rights Reserved.  <a href="https://www.lhotsetechnologies.com/privacy">Privacy Policy</a></div>
            </React.Fragment>
        );
    }
}