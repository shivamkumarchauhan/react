import React, { Component } from 'react';
import HeaderEnd from './HeaderEnd';
import Header from './Header';

export default class HeaderSection extends Component {

        render(){
                return (
                        <section className="ladnding-top-cont">
                                <Header />
                                <HeaderEnd />
                        </section>
                );
        }

}