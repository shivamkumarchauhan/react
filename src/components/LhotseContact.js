import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterEnd from './FooterEnd';
import arrow from '../assets/arrow-up.svg';
import MainContact from './contact/MainContact';
import HeaderEndContact from './contact/HeadetEndContact';

export default function LhotseContact() {

	document.title="Contact | Lhotse Technologies";

	return (
		<>
			<section className="ladnding-top-cont inner">
					<Header />
					<HeaderEndContact />
			</section>

			<MainContact />

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