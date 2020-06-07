import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';

export function getSectionMenu(section, item) {

    if (item.menu === section) {
        return (
            <li key={item.menuTitle} > <Link to={item.menuLink} target={item.openInNewWindow === 1 ? '_blank' : ''} >{item.menuTitle}</Link></li>
        );
    }
    else {
        return ''
    }                                           
}

export function footer(item){

    return (
        <React.Fragment>
            <li key={item.menuTitle}><a href={`http://lhotsetechnologies.com`+item.menuLink}>{item.menuTitle}</a></li>
            {item.menuTitle==='TECHNOLOGY' ? '' : <li className="hidemobile" >|</li>}
        </React.Fragment>
    )
}

export function footerIcon(item){

    return (
        <li><a href={"https://www.facebook.com/"+item.socialLink} target="_blank" rel="noreferrer noopener"><img src={require(`../../assets/${item.iconName}`)} alt={item.altName}></img></a></li>
    )
}

export function footerEnd(item){

    return (
        <li><a href={`http://lhotsetechnologies.com`+item.linkName}>{item.title}</a></li>
    )
}

export function service(item) {
    return (
        <div className="service-box">       
            <div className="service-icon">
                <img src={require(`../../assets/${item.imageName}.png`)} alt={item.altText} />
            </div>
            <div className="service-name">{item.serviceName}</div>
            <p className="service-text">{item.serviceDescription}</p>
            <a href={item.menuLink}>{item.knowMore}</a>
        </div>
    );
}

export function technology(item) {
    return (
        <div className={item.className}>
            <div className="img">
                <img src={require(`../../assets/${item.imageName}.jpg`)} alt="Alt" />
            </div>
            <div className="tech-text">
                {item.technologyDescription}
            </div>
        </div>
    )
}

export function contact(item) {

    return (
        <div className="addrs-box" key={item.city}><b>{item.city} :</b>
            <div className="addrs-row"><i className="fa fa-map-marker"></i>
                <div dangerouslySetInnerHTML={ {__html: item.address} } />
            </div>
            <div className="addrs-row">
                <i className="fa fa-phone"></i>
                <div>
                    <a href="tel:+919871468098">+91 - {item.phone}</a>
                </div>
            </div>
            <div className="addrs-row">
                <i className="fa fa-envelope"></i>
                <div>
                    <a href="mailto:info@lhotsetechnologies.com">{item.email}</a>
                </div>
            </div>
        </div>
    )
}