import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterEnd from './FooterEnd';
import arrow from '../assets/arrow-up.svg';
import HeaderEndTechnology from './technology/HeaderEndTechnology';
import MainTechnology from './technology/MainTechnology';

export default function LhotseTechnology() {

	document.title="Technology Stack - Lhotse Technologies";

	return (
		<>
			<section className="ladnding-top-cont inner">
					<Header />
					<HeaderEndTechnology />
			</section>

			<MainTechnology />

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