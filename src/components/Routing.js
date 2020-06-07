import React from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';
import LhotseHome from './LhotseHome';
import LhotseAbout from './LhotseAbout';
import LhotseServices from './LhotseServices';
import LhotseTechnology from './LhotseTechnology';
import LhotseContact from './LhotseContact';

export default class Routing extends React.Component{

      render(){
            return (
                  <Router>
                        <Switch>
                              <Route path="/" exact component={LhotseHome} />
                              <Route path="/about" component={LhotseAbout} />
                              <Route path="/services" component={LhotseServices} />
                              <Route path="/technology" component={LhotseTechnology} />
                              <Route path="/contact" component={LhotseContact} />
                        </Switch>
                  </Router>     
            );
      }
}