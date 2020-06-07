import React, { Component } from 'react';
import axios from 'axios';
import { technology } from '../utilities/utilities';

export default class MainSectionOneTechnology extends Component {

    constructor(props) {
        super(props);
        this.state = {
            technologyList: []
        };
    }

    componentDidMount() {
        const HOST_URL = window.$HOST_URL
        const TECH_DESCRIPTION = window.$TECH_DESCRIPTION
        axios.get(HOST_URL+TECH_DESCRIPTION)
            .then(res => {
                const menu = res.data;
                console.log(menu);
                this.setState({ technologyList: menu });
            });
    }

    render() {
        let { technologyList } = this.state;
        
        return (
            <section >
                <div class="container">
                    <div class="tech-page">
                        {
                            technologyList.map(item=>{
                                return technology(item)
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}