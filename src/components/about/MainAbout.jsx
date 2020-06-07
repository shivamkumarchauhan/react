import React, { Component } from 'react';
import MainSectionOneAbout from './MainSectionOneAbout';
import MainSectionTwoAbout from './MainSectionTwoAbout';

export default class MainAbout extends Component {

      render(){
            return(
                  <main class="wrapper">
                        <MainSectionOneAbout />
                        <MainSectionTwoAbout />
                  </main>
            );
      }
}