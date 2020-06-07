import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterEnd from './FooterEnd';
import MainBlogs from './blogs/MainBlogs';

export default function LhotseContact() {

	document.title = "AEM Blogs | Lhotse Technologies";

	return (
		<body class="home blog">
			<div id="main-container" >
				<div class="page-wrapper" >
					<Header />
					<MainBlogs />
				</div>
				<section class="footer">
					<Footer />
					<FooterEnd />
				</section>
			</div>
		</body>
	);
}