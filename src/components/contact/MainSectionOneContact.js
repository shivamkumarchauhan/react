import React, { Component } from 'react';
import axios from 'axios';
import { contact } from '../utilities/utilities';

export default class MainSectionOneTechnology extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addressList: []
        };
    }

    componentDidMount() {
        const HOST_URL = window.$HOST_URL
        const ADDRESS = window.$ADDRESS
        axios.get(HOST_URL+ADDRESS)
            .then(res => {
                const menu = res.data;
                this.setState({ addressList: menu });
            });
    }

    render() {
        let { addressList } = this.state;
        return (
            <div className="contact-address">
                {
                    addressList.map(item=>{
                        return contact(item)
                    })
                }
            </div>
        )
    }
}