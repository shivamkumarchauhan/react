import React from 'react';
import Header from './Header';
import HeaderEndAbout from './about/HeaderEndAbout';
import MainAbout from './about/MainAbout';
import Footer from './Footer';
import FooterEnd from './FooterEnd';
import arrow from '../assets/arrow-up.svg';

export default function LhotseAbout() {

	document.title = "About Us | Lhotse Technologies";

	return (
		<>
			<section class="ladnding-top-cont inner">
				<Header />
				<HeaderEndAbout />
			</section>

			<MainAbout />

			<section class="footer">
				<Footer />
				<FooterEnd />
			</section>

			<a id="gotop">
				<img src={arrow} alt=""></img>
			</a>
		</>
	);
}