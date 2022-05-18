import React from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Ganja from '../assets/ganja.png';
import Testominial from './testominial';
import Services from './services';
import Contact from './contact';
import Navbar from './navbar';
import Banner from './banner';
import Skills from './skills';
import Footer from './footer';
import About from './about';
import Award from './award';
import Work from './work';

const Home = () => {
	return (
		<div className="App" id="scrool" style={{ backgroundColor: '#171554' }}>
			<Navbar />
			<Banner />
			<About />
			<Skills />
			<Services />
			{/* <Award /> */}
			<Work />
			<Testominial />
			<Contact />
			<Footer />
			<div className="col-lg-12">
				<div className="header-menu">
					<ul className="smothscroll">
						<li>
							<a href="#scrool">
								<FontAwesomeIcon icon={faArrowUp} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;

// {
// 	/* <div className="wpo-blog-area section-padding">
// 					<div className="container">
// 						<div className="col-12">
// 							<div className="section-title text-center">
// 								<h2>Latest News</h2>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
// 								<div className="wpo-blog-wrap">
// 									<div className="wpo-blog-img">
// 										<img
// 											src="http://follio-react.wpocean.com/static/media/1.8db7cac3.jpg"
// 											alt="blog"
// 										/>
// 									</div>
// 									<div className="wpo-blog-text">
// 										<ul>
// 											<li>
// 												<span>By Admin</span>
// 											</li>
// 											<li>. Nov 24, 2020</li>
// 										</ul>
// 										<h2>
// 											<a href="/blog-details">Helpful tips for become a successful designer</a>
// 										</h2>
// 										<a href="/blog-details">Read More...</a>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
// 								<div className="wpo-blog-wrap">
// 									<div className="wpo-blog-img">
// 										<img
// 											src="http://follio-react.wpocean.com/static/media/2.35c9abda.jpg"
// 											alt="blog"
// 										/>
// 									</div>
// 									<div className="wpo-blog-text">
// 										<ul>
// 											<li>
// 												<span>By Admin</span>
// 											</li>
// 											<li>. Nov 24, 2020</li>
// 										</ul>
// 										<h2>
// 											<a href="/blog-details">Helpful tips for become a successful designer</a>
// 										</h2>
// 										<a href="/blog-details">Read More...</a>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
// 								<div className="wpo-blog-wrap">
// 									<div className="wpo-blog-img">
// 										<img
// 											src="http://follio-react.wpocean.com/static/media/3.43af2d95.jpg"
// 											alt="blog"
// 										/>
// 									</div>
// 									<div className="wpo-blog-text">
// 										<ul>
// 											<li>
// 												<span>By Admin</span>
// 											</li>
// 											<li>. Nov 24, 2020</li>
// 										</ul>
// 										<h2>
// 											<a href="/blog-details">Helpful tips for become a successful designer</a>
// 										</h2>
// 										<a href="/blog-details">Read More...</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div> */
// }

// {
// 	/* <div className="wpo-protfolio-area section-padding undefined">
// 				<div className="container">
// 					<div className="col-12">
// 						<div className="section-title">
// 							<h2>Portfolio</h2>
// 						</div>
// 					</div>
// 					<div className="row">
// 						<div className="col-12">
// 							<div className="wpo-protfolio-item">
// 								<div className="row">
// 									<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
// 										<div className="wpo-protfolio-left">
// 											<div className="wpo-protfolio-single">
// 												<div className="wpo-protfolio-img">
// 													<img
// 														src="http://follio-react.wpocean.com/static/media/img-1.bcaec8cb.jpg"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="wpo-protfolio-text">
// 													<h2>Minimalism</h2>
// 													<span>Illustration . Art Direction</span>
// 													<a href="/projectDetails">View Work</a>
// 												</div>
// 											</div>
// 											<div className="wpo-protfolio-single">
// 												<div className="wpo-protfolio-img">
// 													<img
// 														src="http://follio-react.wpocean.com/static/media/img-2.c17aa951.jpg"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="wpo-protfolio-text">
// 													<h2>3D Project</h2>
// 													<span>Illustration . Art Direction</span>
// 													<a href="/projectDetails">View Work</a>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
// 										<div className="wpo-protfolio-right">
// 											<div className="wpo-protfolio-single">
// 												<div className="wpo-protfolio-img">
// 													<img
// 														src="http://follio-react.wpocean.com/static/media/img-3.4918c2e8.jpg"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="wpo-protfolio-text">
// 													<h2>Abstract Art</h2>
// 													<span>Illustration . Art Direction</span>
// 													<a href="/projectDetails">View Work</a>
// 												</div>
// 											</div>
// 											<div className="wpo-protfolio-single">
// 												<div className="wpo-protfolio-img">
// 													<img
// 														src="http://follio-react.wpocean.com/static/media/img-4.9ca17d0e.jpg"
// 														alt=""
// 													/>
// 												</div>
// 												<div className="wpo-protfolio-text">
// 													<h2>Modern BG</h2>
// 													<span>Illustration . Art Direction</span>
// 													<a href="/projectDetails">View Work</a>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="protfolio-btn">
// 									<a href="/">See More Work...</a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div> */
// }
