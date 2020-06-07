import React from 'react';
import Header from './Header';
import HeaderEndServices from './services/HeaderEndServices';
import MainServices from './services/MainServices';
import Footer from './Footer';
import FooterEnd from './FooterEnd';
import arrow from '../assets/arrow-up.svg';

export default function LhotseServices() {

	document.title="AEM Development Services";

	return (
		<>
			<section className="ladnding-top-cont inner">
					<Header />
					<HeaderEndServices />
			</section>

			<MainServices />

			<section className="footer">
				<Footer />
				<FooterEnd />
			</section>

			<a id="gotop" >
                		<img src={arrow} alt=""></img>
            	</a>
		</>
	);
}