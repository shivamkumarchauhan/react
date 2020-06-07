import React, { Component } from 'react';
import axios from 'axios';
import { service } from '../utilities/utilities';

export default class MainSectionOneServices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceMenuList: []
        };
    }

    componentDidMount() {
        const HOST_URL = window.$HOST_URL
        const SERVICE_MENU = window.$SERVICE_MENU
        axios.get(HOST_URL+SERVICE_MENU)
            .then(res => {
                const menu = res.data;
                console.log(menu);
                this.setState({ serviceMenuList: menu });
            });
    }

    render() {
        let { serviceMenuList } = this.state;
        return (
            <div class="service-page">
                {
                    serviceMenuList.map(item => {
                        console.log(item)
                        return service(item)
                    })
                }
            </div>
        );
    }
}