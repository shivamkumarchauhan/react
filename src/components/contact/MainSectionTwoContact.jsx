import React, { Component } from 'react';
import { validate , hideerrordiv } from './ContactUtilities';

export default class MainSectionOneTechnology extends Component {
    render() {

        let styles = {
            position: 'relative'
        };

        return (
            <div className="contact-form" style={styles}>
                <div className="contactform-heading">
                    <h2>Send us a message</h2>
                    <p>Please fill the form below and we will get back to you as soon as possible.</p>
                </div>
                <form className="contact" method="post" name="contactfrm" id="contactfrm" action="" >
                    <div className="input-row double">
                        <div className="inputs">
                            <label>First Name <span>*</span></label>
                            <input type="text" name="firstName" id="firstName" onKeyUp={ hideerrordiv(this.id) } />
                        </div>
                        <div className="inputs">
                            <label>Last Name </label>
                            <input type="text" name="lastName" id="lastName" />
                        </div>
                    </div>
                    <div className="input-row double">
                        <div className="inputs">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" name="email" id="email" onKeyUp={ hideerrordiv(this.id) } />
                        </div>
                        <div className="inputs">
                            <label htmlFor="phone">Phone No. </label>
                            <input type="number" name="phone" id="phone" onKeyUp={ hideerrordiv(this.id) } />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="inputs">
                            <label htmlFor="email">Comment or Message <span>*</span></label>
                            <textarea rows="5" name="comment" id="comment" onKeyUp={ hideerrordiv(this.id) }></textarea>
                        </div>
                    </div>
                    <div className="captcha-container">
                        <div className="g-recaptcha" data-sitekey="6LeL1LEUAAAAAMiGYIhK3YF8wyDdxJvKNGuDSVL0" ></div>
                        <span id="captacherror" ></span>
                    </div>
                    <div className="button-container">
                        <input type="submit" className="submit" name="Submit" id="Submit" value="Submit" onClick={validate} />
                    </div>
                </form>
            </div>
        )
    }
}