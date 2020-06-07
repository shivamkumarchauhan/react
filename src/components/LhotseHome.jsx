import React from "react";
import Header from "./Header";
import HeaderEndHome from "./home/HeaderEndHome";
import MainHome from "./home/MainHome";
import Footer from './Footer.jsx';
import FooterEnd from './FooterEnd';
import arrow from '../assets/arrow-up.svg';

export default function LhotseHome() {

    document.title = "AEM consulting India - Lhotse Technologies";

    return (
        <>
            <section className="ladnding-top-cont">
                <Header />
                <HeaderEndHome />
            </section>

            <MainHome />

            <section className="footer">
                <Footer />
                <FooterEnd />
            </section>

            <a id="gotop">
                <img src={arrow} alt=""></img>
            </a>
        </>
    );
}
