import React, { Component } from 'react';

export default class Footer extends Component {

    render(){
        return (
                  <>
                        <section className="footer">
                              <footer>
                                    <div className="container">
                                          <div className="footer-menu">
                                                <ul className="main-menu">
                                                      <li><a href="http://lhotsetechnologies.com/">HOME</a></li>
                                                      <li className="hidemobile">|</li>
                                                      <li><a href="https://www.lhotsetechnologies.com/about">ABOUT</a></li>
                                                      <li className="hidemobile">|</li>
                                                      <li><a href="https://www.lhotsetechnologies.com/services">SERVICES</a></li>
                                                      <li className="hidemobile">|</li>
                                                      <li><a href="http://lhotsetechnologies.com/blog">BLOG</a></li>
                                                      <li className="hidemobile">|</li>
                                                      <li><a href="https://www.lhotsetechnologies.com/technology">TECHNOLOGY</a></li>
                                                      <li className="hidemobile">|</li>
                                                      <li><a href="https://www.lhotsetechnologies.com/contact">CONTACT</a></li>
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
                                                      <li><a href="https://www.facebook.com/lhotsetechnologies" target="_blank"><img src="./AEM Consulting India - Lhotse Technologies_files/facebook.png" alt=""></img></a></li>
                                                      <li><a href="https://twitter.com/LhotseTechnolo1" target="_blank"><img src="./AEM Consulting India - Lhotse Technologies_files/twitter.png" alt="No"></img></a></li>
                                                      <li><a href="https://www.linkedin.com/in/lhotse-technologies-5ba15b191" target="_blank"><img src="./AEM Consulting India - Lhotse Technologies_files/linkedin.png" alt="No"></img></a></li>
                                                </ul>
                                          </div>
                                    </div>

                              </footer>

                              <div className="offerd-services-cont" style={{align: 'center'}}>
                                    <div className="container">
                                          <ul>
                                                <li><a href="http://lhotsetechnologies.com/aem-migration-5.6-to-6.4">AEM Migration 5.6 to 6.4</a></li>
                                                <li><a href="http://lhotsetechnologies.com/aem-as-pim">AEM as PIM</a></li>
                                                <li><a href="http://lhotsetechnologies.com/aem-with-wcs">AEM with WCS</a></li>
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
                        </section>

                        <a id="gotop"><img src="./AEM Consulting India - Lhotse Technologies_files/arrow-up.svg" alt=""></img> </a>
                  </>
            );
      }
}