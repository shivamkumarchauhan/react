import React, { Component } from 'react';
import MainSectionOneContact from './MainSectionOneContact';
import MainSectionTwoContact from './MainSectionTwoContact';

export default class MainContact extends Component {

    render() {
        return (
            <main className="wrapper">
                <section>
                    <div className="container">
                        <div className="contact_page">
                            <MainSectionOneContact />
                            <MainSectionTwoContact />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}