import React, { Component } from 'react';

export default class MainSectionTwoAbout extends Component {

      render(){

            let styles = {
                  textTransform: 'none',     
            };

            return(
                  <section>
                        <div class="expertise-container">
                              <h3 class="small-heading" style={ styles }>Here are the Adobe Marketing Cloud Platforms that we have experties on </h3>
                              <div class="container">
                                    <div class="platforms-container">
                                          <div class="platform-box">
                                                <h3>AEM<br />ASSESTS</h3>
                                                <a href="aem-assets" class="know-more">+ KNOW MORE</a>
                                          </div>
                                          <div class="platform-box">
                                                <h3>AEM<br />SITES</h3>
                                                <a href="aem-sites" class="know-more">+ KNOW MORE</a>
                                          </div>
                                          <div class="platform-box">
                                                <h3>AEM<br />FORMS</h3>
                                                <a href="aem-forms" class="know-more">+ KNOW MORE</a>
                                          </div>
                                          <div class="platform-box">
                                                <h3>ADOBE<br />ANALYTICS</h3>
                                                <a href="adobe-analytics" class="know-more">+ KNOW MORE</a>
                                          </div>
                                          <div class="platform-box">
                                                <h3>ADOBE<br />TARGET</h3>
                                                <a href="///////////////" class="know-more">+ KNOW MORE</a>
                                          </div>
                                          <div class="platform-box">
                                                <h3>ADOBE<br />DYNAMIC<br />MEDIA</h3>
                                                <a href="//////////////" class="know-more">+ KNOW MORE</a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            );
      }
}