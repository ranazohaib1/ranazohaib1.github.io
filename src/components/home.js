import React from 'react';
import { faAdd, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Ganja from '../assets/ganja.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
	const handleSubmit = (data) => {
		console.log('data', data);
	};

	return (
		<div className="App" id="scrool">
			<div className="fixed-navbar animated fadeInDown active">
				<div className="header-style-1">
					<div className="container">
						<div className="header-content">
							<div className="logo">
								<a title="" href="/">
									<h1 style={{ color: 'white', letterSpacing: 3 }}>Zohaib</h1>
								</a>
							</div>
							<nav className="d-lg-block d-none header-b"></nav>
							<div className="contact">
								<div className="cart-search-contact">
									<a className="theme-btn" href="/contact">
										Lets Talk
									</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
						<div>
							<div className="mobileMenu ">
								<ul className="responsivemenu">
									<li>
										<p>
											Home<i className="fa fa-angle-right" aria-hidden="true"></i>
										</p>
										<div className="collapse">
											<div className="card">
												<div className="card-body">
													<ul>
														<li>
															<a className="active" href="/home">
																Home
															</a>
														</li>
														<li>
															<a className="active" href="/home2">
																HomePage 2
															</a>
														</li>
														<li>
															<a className="active" href="/home3">
																HomePage 3
															</a>
														</li>
														<li>
															<a className="active" href="/home4">
																HomePage 4
															</a>
														</li>
														<li>
															<a className="active" href="/home5">
																HomePage 5
															</a>
														</li>
														<li>
															<a className="active" href="/home6">
																HomePage 6
															</a>
														</li>
														<li>
															<a className="active" href="/home7">
																HomePage 7
															</a>
														</li>
														<li>
															<a className="active" href="/home8">
																HomePage 8
															</a>
														</li>
														<li>
															<a className="active" href="/home9">
																HomePage 9
															</a>
														</li>
														<li>
															<a className="active" href="/home10">
																HomePage 10
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<a href="/about">About</a>
									</li>
									<li>
										<p>
											Portfolio<i className="fa fa-angle-right" aria-hidden="true"></i>
										</p>
										<div className="collapse">
											<div className="card">
												<div className="card-body">
													<ul>
														<li>
															<a className="active" href="/protfolioGrid">
																Portfolio Grid
															</a>
														</li>
														<li>
															<a className="active" href="/protfolioGrid2">
																Portfolio Grid-2
															</a>
														</li>
														<li>
															<a className="active" href="/protfolioMashonary">
																Portfolio Mashonary
															</a>
														</li>
														<li>
															<a className="active" href="/protfolioList">
																Portfolio List
															</a>
														</li>
														<li>
															<a className="active" href="/protfolioCro">
																Portfolio Cro
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<p>
											Pages<i className="fa fa-angle-right" aria-hidden="true"></i>
										</p>
										<div className="collapse">
											<div className="card">
												<div className="card-body">
													<ul>
														<li>
															<a className="active" href="/about">
																About
															</a>
														</li>
														<li>
															<a className="active" href="/serviceDetails">
																Service Details
															</a>
														</li>
														<li>
															<a className="active" href="/projectDetails">
																Project Details
															</a>
														</li>
														<li>
															<a className="active" href="/404">
																404 Page
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<p>
											Blog<i className="fa fa-angle-right" aria-hidden="true"></i>
										</p>
										<div className="collapse">
											<div className="card">
												<div className="card-body">
													<ul>
														<li>
															<a className="active" href="/blog">
																Blog
															</a>
														</li>
														<li>
															<a className="active" href="/blogfullwidth">
																Blog Fullwidth
															</a>
														</li>
														<li>
															<a className="active" href="/blog-details">
																Blog Details
															</a>
														</li>
														<li>
															<a className="active" href="/blog-details-fullwidth">
																Blog Details Fullwidth
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li>
										<a href="/contact">Contact</a>
									</li>
								</ul>
							</div>
							<div className="showmenu">
								<i className="fa fa-bars" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="wpo-hero-style-2">
				<div className="wpo-slide-wrap">
					<div className="container">
						<div className="row">
							<div className="col col-md-8 slide-caption">
								<h2 className="wow fadeInLeftSlow" data-wow-delay="1.0s">
									I’m <span>Zohaib</span> Dilshad
								</h2>
								<p className="wow fadeInUp" data-wow-delay="1.5s">
									Software Developer
								</p>
								<div className="bg-social wow fadeInUp" data-wow-delay="2.0s">
									<ul>
										<li>
											<a href="/">
												<FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
											</a>
										</li>
										<li>
											<a href="/">
												<FontAwesomeIcon icon={faInstagram} style={{ color: 'white' }} />
											</a>
										</li>
										<li>
											<a href="/">
												<FontAwesomeIcon icon={faTwitter} style={{ color: 'white' }} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="wpo-slide-right-img">
						<div className="slide-img wow fadeInRightSlow" data-wow-duration="2000ms">
							{/* <img src={Ganja} width="100%" height="100%" alt="" /> */}
						</div>
					</div>
				</div>
			</section>
			<div className="wpo-exprience-area">
				<div className="exprience-wrap">
					<div className="exprience-b">
						<h2>1</h2>
						<div className="exprience-s">
							<span>Years</span>
							<span>Experience</span>
						</div>
					</div>
				</div>
			</div>
			<div className="about-area section-padding">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>About Me</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="wpo-about-wrap">
								<div className="tab-content">
									<div className="tab-pane active">
										<div className="wpo-about-item">
											<div className="row">
												<div className="col-lg-6">
													<div className="wpo-about-img">
														<img
															src="http://follio-react.wpocean.com/static/media/about.c07f3d2b.png"
															alt=""
														/>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="wpo-about-text">
														<h2>I create products not just art</h2>
														<p>
															My name is John Smith. I am a web designer and
															developer.Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore et dolore
															magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
															commodo viverra maecenas accumsan lacus vel facilisis.{' '}
														</p>
														<a className="theme-btn" href="/about">
															Lets Talk
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane">
										<div className="wpo-about-item">
											<div className="wpo-service-item">
												<div className="row">
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon">
																	<i className="fi flaticon-idea"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Product Design</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon-2">
																	<i className="fi flaticon-files-and-folders"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Web Design</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon-3">
																	<i className="fi flaticon-artist"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Visual Design</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon-4">
																	<i className="fi flaticon-man"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Business Strategy</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane">
										<div className="social-tab">
											<div className="row">
												<div className="col-lg-4 col-md-6 col-sm-12d col-12">
													<div className="wpo-social-wrap">
														<div className="wpo-social-icon">
															<i className="fa fa-facebook"></i>
														</div>
														<div className="wpo-social-text">
															<h2>Facebook</h2>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12  col-12">
													<div className="wpo-social-wrap">
														<div className="wpo-social-icon-2">
															<i className="fa fa-instagram" aria-hidden="true"></i>
														</div>
														<div className="wpo-social-text">
															<h2>Instagram</h2>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12 col-12">
													<div className="wpo-social-wrap">
														<div className="wpo-social-icon-3">
															<i className="fa fa-twitter" aria-hidden="true"></i>
														</div>
														<div className="wpo-social-text">
															<h2>Twitter</h2>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12 col-12">
													<div className="wpo-social-wrap">
														<div className="wpo-social-icon-4">
															<i className="fa fa-dribbble" aria-hidden="true"></i>
														</div>
														<div className="wpo-social-text">
															<h2>Dribble</h2>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-12 col-12">
													<div className="wpo-social-wrap">
														<div className="wpo-social-icon-5">
															<i className="fa fa-linkedin" aria-hidden="true"></i>
														</div>
														<div className="wpo-social-text">
															<h2>Linkedin</h2>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-6 col-sm-6 custom-grid col-12">
													<div className="wpo-social-wrap">
														<div className="wpo-social-icon-6">
															<i className="fa fa-behance" aria-hidden="true"></i>
														</div>
														<div className="wpo-social-text">
															<h2>Behance</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane">
										<div className="Award-wrap">
											<div className="wpo-award-wrap">
												<div className="row">
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img
																src="http://follio-react.wpocean.com/static/media/award.83836d08.jpg"
																alt=""
															/>
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img
																src="http://follio-react.wpocean.com/static/media/award2.c76bbb89.jpg"
																alt=""
															/>
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img
																src="http://follio-react.wpocean.com/static/media/award3.757fd2e0.jpg"
																alt=""
															/>
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img
																src="http://follio-react.wpocean.com/static/media/award4.5fabb789.jpg"
																alt=""
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="tab-pane">
										<div className="wpo-about-item">
											<div className="row">
												<div className="col-lg-12">
													<div className="wpo-counter-grids">
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="75">
																		75
																	</span>
																	%
																</h2>
															</div>
															<p>Communication Skills</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="40">
																		40
																	</span>
																	%
																</h2>
															</div>
															<p>React</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="65">
																		65
																	</span>
																	%
																</h2>
															</div>
															<p>Problem Solving</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="55">
																		55
																	</span>
																	%
																</h2>
															</div>
															<p>Analitical Abilities</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="43">
																		43
																	</span>
																	%
																</h2>
															</div>
															<p>Organization</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="82">
																		82
																	</span>
																	%
																</h2>
															</div>
															<p>Creativity</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-area section-padding">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Skills</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="wpo-about-wrap">
								<div className="tab-content">
									<div className="tab-pane active">
										<div className="wpo-about-item">
											<div className="row">
												<div className="col-lg-12">
													<div className="wpo-counter-grids">
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="75">
																		75
																	</span>
																	%
																</h2>
															</div>
															<p>Communication Skills</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="65">
																		65
																	</span>
																	%
																</h2>
															</div>
															<p>Problem Solving</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="82">
																		82
																	</span>
																	%
																</h2>
															</div>
															<p>Creativity</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="40">
																		40
																	</span>
																	%
																</h2>
															</div>
															<p>ReactJs</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="35">
																		35
																	</span>
																	%
																</h2>
															</div>
															<p>NodeJs</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="75">
																		75
																	</span>
																	%
																</h2>
															</div>
															<p>HTML</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="60">
																		60
																	</span>
																	%
																</h2>
															</div>
															<p>CSS</p>
														</div>
														<div className="grid">
															<div>
																<h2>
																	<span className="odometer" data-count="35">
																		35
																	</span>
																	%
																</h2>
															</div>
															<p>MongoDB</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-area section-padding">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Services</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="wpo-about-wrap">
								<div className="tab-content">
									<div className="tab-pane active">
										<div className="wpo-about-item">
											<div className="wpo-service-item">
												<div className="row">
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon">
																	<i className="fi flaticon-idea"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Website</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon-2">
																	<i className="fi flaticon-files-and-folders"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Web Design</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon-3">
																	<i className="fi flaticon-artist"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Visual Design</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="wpo-service-wrap">
															<div className="wpo-services-icon-wrap">
																<div className="wpo-service-icon-4">
																	<i className="fi flaticon-man"></i>
																</div>
															</div>
															<div className="wpo-service-text">
																<h2>Business Strategy</h2>
																<p>
																	consectetur adipiscing elit, eiusmod tempor
																	incididunt labore.
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-area section-padding">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Award</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="wpo-about-wrap">
								<div className="tab-content">
									<div className="tab-pane active">
										<div className="Award-wrap">
											<div className="wpo-award-wrap">
												<div className="row">
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img src="/static/media/award.83836d08.jpg" alt="" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img src="/static/media/award2.c76bbb89.jpg" alt="" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img src="/static/media/award3.757fd2e0.jpg" alt="" />
														</div>
													</div>
													<div className="col-md-6 col-sm-12">
														<div className="wpo-award-img">
															<img src="/static/media/award4.5fabb789.jpg" alt="" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="wpo-protfolio-area section-padding undefined">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Portfolio</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="wpo-protfolio-item">
								<div className="row">
									<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="wpo-protfolio-left">
											<div className="wpo-protfolio-single">
												<div className="wpo-protfolio-img">
													<img
														src="http://follio-react.wpocean.com/static/media/img-1.bcaec8cb.jpg"
														alt=""
													/>
												</div>
												<div className="wpo-protfolio-text">
													<h2>Minimalism</h2>
													<span>Illustration . Art Direction</span>
													<a href="/projectDetails">View Work</a>
												</div>
											</div>
											<div className="wpo-protfolio-single">
												<div className="wpo-protfolio-img">
													<img
														src="http://follio-react.wpocean.com/static/media/img-2.c17aa951.jpg"
														alt=""
													/>
												</div>
												<div className="wpo-protfolio-text">
													<h2>3D Project</h2>
													<span>Illustration . Art Direction</span>
													<a href="/projectDetails">View Work</a>
												</div>
											</div>
										</div>
									</div>
									<div className="col col-lg-6 col-md-6 col-sm-12 col-12">
										<div className="wpo-protfolio-right">
											<div className="wpo-protfolio-single">
												<div className="wpo-protfolio-img">
													<img
														src="http://follio-react.wpocean.com/static/media/img-3.4918c2e8.jpg"
														alt=""
													/>
												</div>
												<div className="wpo-protfolio-text">
													<h2>Abstract Art</h2>
													<span>Illustration . Art Direction</span>
													<a href="/projectDetails">View Work</a>
												</div>
											</div>
											<div className="wpo-protfolio-single">
												<div className="wpo-protfolio-img">
													<img
														src="http://follio-react.wpocean.com/static/media/img-4.9ca17d0e.jpg"
														alt=""
													/>
												</div>
												<div className="wpo-protfolio-text">
													<h2>Modern BG</h2>
													<span>Illustration . Art Direction</span>
													<a href="/projectDetails">View Work</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="protfolio-btn">
									<a href="/">See More Work...</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="wpo-testimonial-area section-padding undefined">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Testimonial</h2>
						</div>
					</div>
					<div className="wpo-testimonial-main">
						<div className="slick-slider slick-initialized" dir="ltr">
							<button
								type="button"
								data-role="none"
								className="slick-arrow slick-prev"
								style={{ display: 'block' }}
							>
								{' '}
								Previous
							</button>
							<div className="slick-list">
								<div
									className="slick-track"
									style={{ width: '7546px', opacity: 1, transform: 'translate3d(-1078px, 0px, 0px)' }}
								>
									<div
										data-index="-1"
										tabIndex="-1"
										className="slick-slide slick-cloned"
										aria-hidden="true"
										style={{ width: '1078px' }}
									>
										<div>
											<div
												className="wpo-testimonial-wrap"
												tabIndex="-1"
												style={{ width: '100%', display: 'inline-block' }}
											>
												<div className="wpo-testimonial-item">
													<div className="wpo-testimonial-content">
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Quis ipsum suspendisse ultrices gravida.{' '}
														</p>
														<div className="wpo-testimonial-item">
															<div className="wpo-testimonial-img">
																<img
																	src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhDRjg5NzM1NDlFMzExRUE4OUQ1REVGQjM3ODI4QzdEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhDRjg5NzM0NDlFMzExRUE4OUQ1REVGQjM3ODI4QzdEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0NGRmNzIzLTFmN2QtZDI0Mi04NTMyLTAyNWE4NTQwMjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxY2FhNTRhLTkzY2ItNjg0Yi05ZGU1LWZiMTg4MDUwNjg2YyIvPiA8L3Jk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"
																	alt=""
																/>
															</div>
															<div className="wpo-testimonial-thumb">
																<h4>John Harry</h4>
																<span>CEO of Moderntern</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										data-index="0"
										className="slick-slide slick-active slick-current"
										tabIndex="-1"
										aria-hidden="false"
										style={{ outline: 'none', width: '1078px' }}
									>
										<div>
											<div
												className="wpo-testimonial-wrap"
												tabIndex="-1"
												style={{ width: '100%', display: 'inline-block' }}
											>
												<div className="wpo-testimonial-item">
													<div className="wpo-testimonial-content">
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Quis ipsum suspendisse ultrices gravida.{' '}
														</p>
														<div className="wpo-testimonial-item">
															<div className="wpo-testimonial-img">
																<img
																	src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDNzY3MEEwNDlFMzExRUFBMUM1RThCNjM0MDY4QUY3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDNzY3MDlGNDlFMzExRUFBMUM1RThCNjM0MDY4QUY3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0NGRmNzIzLTFmN2QtZDI0Mi04NTMyLTAyNWE4NTQwMjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxY2FhNTRhLTkzY2ItNjg0Yi05ZGU1LWZiMTg4MDUwNjg2YyIvPiA8L3Jk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"
																	alt=""
																/>
															</div>
															<div className="wpo-testimonial-thumb">
																<h4>John Harry</h4>
																<span>CEO of Moderntern</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										data-index="1"
										className="slick-slide"
										tabIndex="-1"
										aria-hidden="true"
										style={{ outline: 'none', width: '1078px' }}
									>
										<div>
											<div
												className="wpo-testimonial-wrap"
												tabIndex="-1"
												style={{ width: '100%', display: 'inline-block' }}
											>
												<div className="wpo-testimonial-item">
													<div className="wpo-testimonial-content">
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Quis ipsum suspendisse ultrices gravida.{' '}
														</p>
														<div className="wpo-testimonial-item">
															<div className="wpo-testimonial-img">
																<img
																	src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2NEZGRUVDNDlFMzExRUE5NjFBRUQxMDFERTgyMkFEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2NEZGRUVCNDlFMzExRUE5NjFBRUQxMDFERTgyMkFEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0NGRmNzIzLTFmN2QtZDI0Mi04NTMyLTAyNWE4NTQwMjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxY2FhNTRhLTkzY2ItNjg0Yi05ZGU1LWZiMTg4MDUwNjg2YyIvPiA8L3Jk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"
																	alt=""
																/>
															</div>
															<div className="wpo-testimonial-thumb">
																<h4>John Harry</h4>
																<span>CEO of Moderntern</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										data-index="2"
										className="slick-slide"
										tabIndex="-1"
										aria-hidden="true"
										style={{ outline: 'none', width: '1078px' }}
									>
										<div>
											<div
												className="wpo-testimonial-wrap"
												tabIndex="-1"
												style={{ width: '100%', display: 'inline-block' }}
											>
												<div className="wpo-testimonial-item">
													<div className="wpo-testimonial-content">
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Quis ipsum suspendisse ultrices gravida.{' '}
														</p>
														<div className="wpo-testimonial-item">
															<div className="wpo-testimonial-img">
																<img
																	src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhDRjg5NzM1NDlFMzExRUE4OUQ1REVGQjM3ODI4QzdEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhDRjg5NzM0NDlFMzExRUE4OUQ1REVGQjM3ODI4QzdEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0NGRmNzIzLTFmN2QtZDI0Mi04NTMyLTAyNWE4NTQwMjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxY2FhNTRhLTkzY2ItNjg0Yi05ZGU1LWZiMTg4MDUwNjg2YyIvPiA8L3Jk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"
																	alt=""
																/>
															</div>
															<div className="wpo-testimonial-thumb">
																<h4>John Harry</h4>
																<span>CEO of Moderntern</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										data-index="3"
										tabIndex="-1"
										className="slick-slide slick-cloned"
										aria-hidden="true"
										style={{ width: '1078px' }}
									>
										<div>
											<div
												className="wpo-testimonial-wrap"
												tabIndex="-1"
												style={{ width: '100%', display: 'inline-block' }}
											>
												<div className="wpo-testimonial-item">
													<div className="wpo-testimonial-content">
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Quis ipsum suspendisse ultrices gravida.{' '}
														</p>
														<div className="wpo-testimonial-item">
															<div className="wpo-testimonial-img">
																<img
																	src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDNzY3MEEwNDlFMzExRUFBMUM1RThCNjM0MDY4QUY3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDNzY3MDlGNDlFMzExRUFBMUM1RThCNjM0MDY4QUY3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0NGRmNzIzLTFmN2QtZDI0Mi04NTMyLTAyNWE4NTQwMjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxY2FhNTRhLTkzY2ItNjg0Yi05ZGU1LWZiMTg4MDUwNjg2YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//AABEIAEYARgMBEQACEQEDEQH/xACiAAABBAMAAwEAAAAAAAAAAAAJAAcICgMFBgECBAsBAAICAwEBAAAAAAAAAAAAAAAHBQYCAwQIARAAAAYBAwMDAgQEBwAAAAAAAQIDBAUGBwARCCESEzEUCSIVQTIjFvBxgZFRYVJiJCUKEQACAQIFAgQEAwcDBQAAAAABAgMRBAAhMRIFQQZRYSITcYEyB5FCFfCxwVJiIxTxcoKhUyQlCP/aAAwDAQACEQMRAD8AvYaMGMapgImYw+gB+H99v66MGKw3zLfOMbhrYl8I8e4WAveQY2ClneWMlSDsJKmYIk/Okyha5KQbUya9huIlOL1w1FZJFskZJNUe4xg1mgBfYQC1AddM+vyzxM2fFe5bi+vCy2pYgADNgBmxP5VrQAgEnOmmKvVq+R/5F7HMjdbVyczTM3jMIxHsscYJaVyrVGtumjQ60FCsq/Jog8rKQVsnunbmPASkWMcjlRRUxjE+Se/uHthFiB65k/w86Ym4uO45Iljmi3ynTaM9epJDfH9ww3zbk58gbGzwmTpzlLk+LmGK8k4rsRP5Br85P1+Gl3yDe3py9aSUTg52LUdtm/3BAg+MrY6ZkilOQxhz9wRxbwd6E5gga+WlB01xmeLglqkkUaKQKbRmFB655kak+GuDQ/GB8tdvvs5EYfyPONpu5RccDmDs8QR+ihbYCKjPfS0vPNZA6rlnZHTsypgTREzRRNBUyShxIYC5SgODJtKv8MiPEU+k+K/PFev+OSBDcWrh4RTeNNhbSnXbXLy8Ti47g3KjK+11k7TcEVOokQR7TAI7mKGw+u2xtaMROJCh1D+B0YMLRgwtGDGjssm3hIKXm3hHqrOFi5KZeIxjFzKSjhpEslpBw2iotkU7yUlHKTYU2zZEplV1zFIQO4wa+ipIA1rgpXIa4/MTheL/ACP+W7mtn7KVLhHGHsHyuf7vkOxXrJoSYx1Xmnc0qk0x+8gmLVF7csqxiTREXMakiCMQmfdyJVCF7q7zfcfG8JuG15L2XSMZHboWLH6VrkBqTphxdt9qcpzkcaFo042ABTLWoZwKhFWvqYfUSSFUUrUmmC60H/zxfbLoVaYzmZxj2RbuZC93SrQko0z/AGF12pi0pMHaba4lY6v1nc6orSzcgyhSH2JsId2oWLvO5uLV2t7YLOpyLHcpyyotNR+GVRiwSdk2NreJ7t0zK59VAN5+Lgmg8KZ50Jw+t4+GzghXHBJB/gNazmYsp1iAW/I11shnqE0kmLsZDyv2gOH7QUvI2XAEzpLGEwdDbaWXLd59527sI7hYwTkAgyp/D45HDX4XsXsW6CPLatKwFCWds91Aa5518RmMVcOcuJHPDHlhAO+PdrmYasY2Vh57HTE0tLunlKsZkHbxWtzs73+4foKovFkwFUqyC7R0dsIEExhBz/b3m+S53t+O85ZFF7VgSMlYA03AdKioI+OEJ90+3+N4DuR7XhmJ40KpEbEkqSM1J6jOqk6ZdcXhfih5QNczYxxxeIw50Yu91eHsSTFTtTUj3TpIW8tHCgCingKwmWzhJIgmEfCUgj66ssqCOQoM16fA6YURBUlTqDiw6xW87VFXcB7yFH+4df6a14+Y+vRgwtGDGFU4pAkv295myyLkpNxKChm6hVSl3DqG5iev4aMGKueI3ONuFt3zrhDN+VqFjldjyx5G3HHKt3m46vvr1QMk29lkiAvCTZIpQci8SuAMFlwARWdM+wBOYptlf3nYyHk1K12sgYak6aZeFDj0p9u+Thm7eQlV3oxQjICoNOtKk1GChx+TMaL0Qt2JkeBUppos0uexsn7ZaNLFpJd6zwrzv7EkCEDcwiAHAehgD01X4pbKOEmWfaOtBmOnj+xxZprXkpL324LUlyaCpyP4DOnkaYE1nrn5FySMsXDOI5C3osJFKNZWnJ2TKDi6v3hdRPymjqG1fyr2xOZNdAwHTcOmpGpCiU5gEhwDUJd2/G8g3uJM6pXNirP8yVG0eY3Vpi12f6txg9p4keXbVUV1jzroN53EeYWnQnFc75WMeRmRsVQPNFrSr3j7IUPYoCoZGpMsoZTyxcg4ViI9F4lGirHSUnHTfYRlJMDKIS8eqmUA/L2sH7dcnLb3z8DJJFLZMjPGyHQr6iPIFakg/ThXfdrh7a64pO5oYp4b9ZUjljbqGO0adQ2SkZMMGA+Fj9wYexhjbGtyVj0LhWiLGtcNGPjSZafJWx+5t8bS5t+i2Ti0rdEwMs3NJR7Vd4MWuoLZdUq5DplvdlznG848snGs7JC4Riyldxzo6VPqjah2tlWlaAUql+6+zu4O0mtJecjiRL+EyRFJBJTbQPHJQAJKm5dyZ0r9VQQLm1KkCyEGyXDce9FMd99/UgDtrvxU8dfowYWjBj1OAGKYBDcBD8dGDAL+e/D1lk7kQxynWlSQN8maZUYafl2cZBuZyxUykPJdohToywTzOSNREXDqURcrSUckDvvbp79+waoHfUrxPaEQi4h2uWjLMquQwoHZCDspWornh6fZt7eS15C3mmMEokTbIqo0iKyksYw4K76jIkUFMNlS+NVSw/i7IVHK0d2t5fKUwZZLkbLIurIM1Jrzrdw4eL+4RatAVVZeUi/tWrVNZM3j7O0A0tuRQTLcXMcEFusyqNkYb2oyGB9AcljkPVU5k9MPfiCjS2tqbq6uFtHYrJOy+/KCrAmQxhUqSaKAKKANTnjqVOH/ABtyi0iZeSxtRmritpP2xY1Sm10z2vlfPmk1Lx0ZIv2DmYhWMw/atnCqSZwMBSplTMRMALqRtp7qfiDxkU8kHGFizwAgKWrUkZbvVrStPliKvFhs+dHK3drBc8wkYSO6dSZPbOSjoppSm6gOpNTXAs/lUkacnU6bjGORaqtbjkGh1h3DxqTdNaPawVvgpuNkWp9gRbSKT5EEUfJ294qfmAAEQ+9uW0dvJcT239sQwORTMNvVkPyoTXHN3XNNd21vbXfrlu7qMEn8u11cH8RliYmKcdEi8x0/FtSRb/YMM0yv1+UUj5hWwtnNznHL+yzoqS6vlK5fwqMkiwcdqqoeVExxNucNMDsOwFpxMl1tANxKDUVz2LtOvmSAR6SBlhM/e3m35LnLPiyxK2UElUNPQZXG3TTeiB9pAYbqMAcWQceR6sfXmCKoD3FQTAd+noQAHoPX1HV2wmMd7owYWjBhaMGIH82XsvRqnG5ShhiCDXnLmCkl7E5XYVtqFrRBhWJO0STRNZ3E1SPuhWZJN0mUxmzRyZQA+ncKz3ZbNNxJmjFZImB/4sQDU+ANDhh/bPkIbXuL/CuSRBdR0FM23pVgFHVmXco6+GAZ2qL5qZctN9wzPZnyBxnkFqFVE8lvalXMZSVBu1amJZdean8A5bstsglkr2hKNTR7lNAW7iPjVG/e1ETg5Fc8XaX0qMje1LAXO5C4Dg167iqlSQKKuQpStKg+jeRv+Ls4YeQrcW7gExyRW00yBgtCGMSu0TqrGhlGYO5atQr99IxTmqByDXsU4SsERSsexFvdTuTct3XM8rk2/tEu1I81KsBbw7yNst1m2DFJJRs7l1oJowMJle0pClHjvOLW2lee5lVLtKAKm12of5itEUEVOVSTlTriR/WZ73jY57e1uG4x8hLcI1sjkarDFIWuJAr0qzqiLU0JNFwF/mXlWt5atFX/AGc5eyDbJWYMgTUU7ORdN26pDN6pVKQeP6gn5JBrFnkxAhSpkTcEEvdv3BLcCFsJbu6lp7EMIHShJO6p/EA+NDWmKbz0svL/AOHaID/lSzMRQnJQu0UOuRBI8BSmLH/xpR1aRgYHo3J4Y+NIn0KXqmzQLv12+pQQ3Nv139dOKoIBGhAp0ypljygVKOyNXeHYGupIJBJJzJqMyc8H7jVWot0iNzkEpSF2ANtw6Bvvt6BowY2e4eu/T/HRgwtGDHgRAA3HRgwzmYgpk9SLTV7o0aSlYsMBKwdkjnZilavIWTaHaP0FVTgJUe1NTuKoID4lQIf1KGsW2MpSQBkYEFT+YHIinmDT92eM45JYZVngYpPGwZWGqspqCPgfx00xXlxlfa2jaS8Z5rJX3KxY+fqDgrJb1u1Kvf8AFMcY27Z26n/E0c3zGXiLHyqSJjqrMDIuk90xDtUvc/ET9s8oLNvXE5jkFfqiWQVQvXQZFS1dR/Nlj1h9vu6brneIPIW7SW88kUkUqKSEnaIgMFUfUcwyoRVd2dBnhlPkJ5o4k464ntFfruTXuWcx5jrr7GtbYx1kYzM9Cx06RaNskq+ZtCkCs1yMifMgU6n6wlUIUDCIlEIr/Hm5W/EkT7rGNas/QU6DIVNQAq5kjMmmJe+5D9O44Ldr/wCwlchI/wA7k/mPqNFWpZzRQGFAK5kTfCLFk5yezvYcyzUAWCxthSso1yiQAEUKwZyL2GCKh11EjlKT7g1jmyiwgBjCAHKYdtwHXFzUpsuL/SrVqySEyTP45k7fmengDjLtyNbnmf1m7WiRD24E+QBbTKgr8a4JdwwvN9h7CWux1kiEYk1jvFEg1RbOEXkbkXGCUbJ3PHVubOFvdFmRqFhjLJBvWQqM5uvOjqkIiszcpB6L7Rh43ubta35K3kkF4IUEhyK1A2fT4bgQc9wOuPK3fvDXXbHdd3YTgew88kkfjsdiwB8xX4UoRrg0tA5S32umSRt1ck1GiJ10VZWNKaSjyGZnFJ0C5kQ9w1Ont3CVQnQogO+tt1xF/aElk3xfzJmKfD6h8x88VZJ4nyBo3gcTBa8oqc4pEnaCyjXwsWzdY5/MlsBVXLduUQNvt6r/AM99RlRSvTG7EtzGKUBEw7AHr/l/Pf019wYaq/5JiKoxUMquUy5hBJJIggZRRY+5SJkL/uEPX8A1tggluZRDAKyH8MupPQYxZgi7m+nAi87Gsl7yrT7a+t9od1ekOLU+nMcwTxRrGWOwSNUcR+O2Mo3700lWENJuXCoEUA6Ll8qgdXokUQvnG2dtawe0EQymnrIBJP5qdR5aUGOCR3c1J9J6fu/Hrhg828EwsMBj/EmZIAVEr1x6rF+j5KNkCsZSi5+gLBYUMokp9gilE38dOFhrdBncGQUFJcrRTcDJAID51+7NxdSd3W3I2pKpLavEtdG9plYA9CKOTQg111GPTf2Xks27Rv7K72sbfkI5D0ZVnjZQwpmDvjoGB6gdcCwxL8QOL6RkJ3LZauFxmIuKFyduzftkSJyIJqGcR8e8kUjGXVK+N9SaigiBnG4D6gGqIvNXlx/YvGMES6nbrTQDoN2gNPLDIPB2MI9+xH+TM1KLupQE5sep2Vq3U64LRhHE8RT6jd2NfrTauQijtFVmyRQSSMZf2oJ+6dgkAEM+8QFKIB1IQu3qO2uGKOWWOd2Uqh0rmaefn1x33VxHDcWkcbKX1O3IV0NB4Za9cZeMnHLH0RC5QydeaW1srSa5TUMVI5yo9Zqt5uo0e0oJXysu2jhq5i7hE120g2RdJmEp0P0VyKpbFBofYx+Wgs+TVpHW0E4WJT9Iam6QjyaqVHiDocKb/wCkJOLl5HhYYEX9QNlJLK4+plLhIlb/AGlZNp8DTMYf7kTi+Sx7LV+Ok5ZWRxk7ttfszt+ycqFfO8fVkkrZLCS2lZA3VjFnSDZsV0KZhK8TDYm3eJNejOMvRcRlwNt0iEf8zkNvlrQHTHmSeH2yOsZP+oOIYy0/HRtmqVRiod2o4tFKn8gWWNboFJDN4iuV9C9IEkK+ur7laaXQlY8qZUEvIV0UEzp9R1ieD45phfbAu2Wm0CquT6asugo3qBGp8sYf5EwX261JH4fD5YPHkPLyzQi0fWIyUnXviWEhYqOfv0t0diH712bdZIgEVMBTCJhEu/oOqJaWMt2a1VIAc2YgD5dSfhiSkkCCgBL+A/jgfFntdlkp08pKrvp1eHkEfvcMg2VjlYyCXATP5NvCrmK6kH0MyXA7lIC+ZZFLyEKAkEBu1nZWtpCY4BQv+YncSa5CoyoTkOgxHyO7msmv7sbPHkDa5/MFJhqenTJOIsd+grHleyWlzLHPE4lqkO9lXn7ESiiex++zMswikAO/XRZJNHThyPlWKikOnkJHitGK+lgCAD/VlSnU1rjbb7C1HqQBlTx8/L+NOmJI8luSPFReQTxPIZppbnkBWZtnbqtSqsJ7rbYhy/BeNdFsMTXE3ryIqc+yWO0fuBMBWyJwcCU3h7dLDufiYubtBx6lU5BSHhZhQB1GQPUKwLIxNBRq5kDDK7GvuU4O9bmFikk4NozFcgECsT0JKgkVkjYLLGKEkptyDHHIyNWZP2pnr6uEEyCX/JUWQK9Qj1fpV9u8fNSKtxAR2MUTGADFEDFAN9KqTjri3laHkreSKZVBIdD6fPcKqQehBIOHJacrBdxrLxd5HPbs1FKOKtl/ISHUgaqVBGmMTKgy88wJC1+IUkXsuJe2PiyEKkVIxgTBZVbYiLRqiHUyqolL09RHXxeNnuyILRDJK4FQugFdSdFXzJ/HTG+TlbPjna+5GUQ20RIDPqWpoBmzscqKoPyGMMTJkdvIbD9MpxbNj6hWN3ZMg5igZlq+hyZTMYWcxU28Qkh7iXjmDZX2ysggoYrZdqBTlAph2c/a3G/odktoFoClWYf9xjVsuoGQr5DCN715I9w3z8zPKVuGKpFAyncLZRRWZqkKxNX2dQ2tccjyVuMGhF16CFJvPIUiJXVn3CYHVczE7IPTGbQioj5e1rEN2Tcq5CgPkObYPxDV84mGRay1pvPp+A1I8yTlhfXTAsE8BgQtKn2kjdc0Z9kp9uwCvWyjYbpuQJtYSwFgyZJXhhP5FrtOMps2KnD3NasUtw6Juk4eqOmoDu1VALKSNqwgHZQgjrTTMeOdR8McdATXqP8AXFsdiDcWLI8IJSx5m6PiRhzf9YmUC/p+0FikoxFMxP8ASYxt/wA3XfSz9Pl+37fDEwtKenTDEZ6bYZesWDHKkgWGsDsyyVam4YqrnIEW7Ehd3TRpCx72XdMifSJ03iJ2xw2DcvQdd9gbwSE2QrQZg/QR51oPhQ1xrm9qn97TAq7S0/bkw4PRpSOyKzSkHxHqDFKdrTJ8CZVAlHUI4lGDMsT5u1MV2p030QZQy3tXKJu4C2qNmkXdOvtv0BIP/UE18tGHnjgYKGohqP21xtK+6hV5ynycbHUVnkArgylYrl6ChHlFGJUCqzKKrtzLOVE4BTdRJcGrsw7ABu8qglDUfeizKkXhUIep+oeFMtx86ZeOOqx/UNxPH+7/AFBN23/lTL8cTnQlcUJourRUqnbnOTft6Ck3jCuTs61rHuxAEl21ntiSTijBAFKUFUll1RenbCQopkN3AWsBIzKIpXpBn6yGKbetV0r4g5V60xNM18LepWM1IoP7fuhumwg+5X/bjUV6e5KuqvYy1GjR0XGmYS5Z9aKmae6EnczVMqZk0ZyysqR2kzEStTsl1dzABiJb9Na+Og7VAZuNmjNuJTuEanNvMhcvLpTTG3m5O4BPGvPRym7MQ9ppSck8gTtP9X5q/VjgMW2XLDXAANePWO4CTpisO6PXJOoTNaaWVrHJKbyiHtJGxFVXsDtsZYFVFtpJNwQ2xRUN9M6YeK95WklbaDmCrUPhU00r8vHLETctyHvOLlf/ACa+omla/jTTSmXhga2fn95lAmzS0HeKzhOlFRcyRKY7byeT80yipXJjQ9R+0PnUlRaq02EZmReGQsp0hMjGMu/udhZoNqk0o0xXLSgHguYBPhWgxFAEtQGmeZNcvjqcdynV+NLXjW5sdoyVhOVbSWIkn+NccIRFqj+LtYxu3KEnOQclby1JaIn56Sr6ElHNVjkQBtYV1jpnUkwVcE4zPyTTDZAVs1Pq9SGRsqAnPKhINKZ0pocdOy0C7d530+og5fAeHjnWmP/Z"
																	alt=""
																/>
															</div>
															<div className="wpo-testimonial-thumb">
																<h4>John Harry</h4>
																<span>CEO of Moderntern</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										data-index="4"
										tabIndex="-1"
										className="slick-slide slick-cloned"
										aria-hidden="true"
										style={{ width: '1078px' }}
									>
										<div>
											<div
												className="wpo-testimonial-wrap"
												tabIndex="-1"
												style={{ width: '100%', display: 'inline-block' }}
											>
												<div className="wpo-testimonial-item">
													<div className="wpo-testimonial-content">
														<p>
															Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
															do eiusmod tempor incididunt ut labore et dolore magna
															aliqua. Quis ipsum suspendisse ultrices gravida.{' '}
														</p>
														<div className="wpo-testimonial-item">
															<div className="wpo-testimonial-img">
																<div className="wpo-testimonial-thumb">
																	<h4>John Harry</h4>
																	<span>CEO of Moderntern</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											data-index="5"
											tabIndex="-1"
											className="slick-slide slick-cloned"
											aria-hidden="true"
											style={{ width: '1078px' }}
										>
											<div>
												<div
													className="wpo-testimonial-wrap"
													tabIndex="-1"
													style={{ width: '100%', display: 'inline-block' }}
												>
													<div className="wpo-testimonial-item">
														<div className="wpo-testimonial-content">
															<p>
																Lorem ipsum dolor sit amet, consectetur adipiscing elit,
																sed do eiusmod tempor incididunt ut labore et dolore
																magna aliqua. Quis ipsum suspendisse ultrices gravida.{' '}
															</p>
															<div className="wpo-testimonial-item">
																<div className="wpo-testimonial-img">
																	<img
																		src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjhDRjg5NzM1NDlFMzExRUE4OUQ1REVGQjM3ODI4QzdEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjhDRjg5NzM0NDlFMzExRUE4OUQ1REVGQjM3ODI4QzdEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0NGRmNzIzLTFmN2QtZDI0Mi04NTMyLTAyNWE4NTQwMjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxY2FhNTRhLTkzY2ItNjg0Yi05ZGU1LWZiMTg4MDUwNjg2YyIvPiA8L3Jk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"
																		alt=""
																	/>
																</div>
																<div className="wpo-testimonial-thumb">
																	<h4>John Harry</h4>
																	<span>CEO of Moderntern</span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<button
									type="button"
									data-role="none"
									className="slick-arrow slick-next"
									style={{ display: 'block' }}
								>
									{' '}
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
				<section className="wpo-contact-area section-padding undefined">
					<div className="wpo-wpo-contact-form-map">
						<div className="container">
							<div className="col-12">
								<div className="section-title text-center">
									<h2>Let’s Talk</h2>
								</div>
							</div>
							<div className="row">
								<div className="co-lg-10 offset-lg-1  col-12">
									<div className="row">
										<div className="col col-lg-6 col-md-12 col-12">
											<div className="wpo-contact-form">
												<h2>Get In Touch</h2>
												<form onSubmit={handleSubmit} className="form">
													<div className="row">
														<div className="col-lg-6 col-md-12">
															<div className="form-field">
																<input type="text" name="name" placeholder="Name" />
																<p></p>
															</div>
														</div>
														<div className="col-lg-6 col-md-12">
															<div className="form-field">
																<input
																	type="text"
																	name="lastname"
																	placeholder="Lastname"
																/>
																<p></p>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-field">
																<input type="email" name="email" placeholder="Email" />
																<p></p>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-field">
																<input
																	type="text"
																	name="subject"
																	placeholder="Subject"
																/>
																<p></p>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-field">
																<textarea
																	name="message"
																	placeholder="Message"
																></textarea>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-submit">
																<button type="submit" className="theme-btn">
																	Send Message
																</button>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div className="col col-lg-6 col-md-12 col-12">
											<div className="wpo-contact-info">
												<div className="info-item">
													<h2>25 North Street,Dubai</h2>
													<div className="info-wrap">
														<div className="info-icon">
															<img
																src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJDMzg5QUY2NkJGMTFFQUJCQzNEQUQzOTA2QjRDM0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJDMzg5QUU2NkJGMTFFQUJCQzNEQUQzOTA2QjRDM0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0ZGY3MjMtMWY3ZC1kMjQyLTg1MzItMDI1YTg1NDAyNWJmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUtZmIxODgwNTA2ODZjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8jFW3AAABHVJREFUeNqUl3mIllUUh51vZlyaXLImU5JqnKiZTA3aTCrLKSwbtE1ICNtwRv8oosVyMpDENpIooqZt0LCkzSIrpmwzTExbjKgIcyylaRm1sawvm6meH/xeuLzcO8uFh/d777nvPfeee8655yvpKh03oI/tImiA0TACsg874DsowrOwsrRrW7G3yQp9UHiHJ38Z/oTNVtoNP8FhVvoZLIfO7rLqFVDe06QlPez4BHgPRsL9cDfsgx+8s6/gSD/XaBw73YvCefxeDJVwFX2r+7Pjm+ETeAMGwe1Wugva4TaogAlM/IoXtkcf8v44jOXnA/AUC2mBQl92/BJcAmOsJGv3wHwY7ve7YDxKLtYLk6+X2XmvDSejfzuPci8mueMGK/0Lzg/6D4eFMC3o+8fnnLVLoQZFswOlGt+lI+H3vSnF1fAYnAFXwpOw079XwibYEozfDX9kL+zoVzvi0yipBznbOtBRHAe30ndNzNT74QU5hN/Lvctz4Rx7bbv5wn06jhaotadrI9MdXs/Doyxop3ffqHeooq8tU9wES7WQiKM9BHV2OK34eBgCR2ijXsgB0FmugrNhMpOPz0+E8m8VksgmZYr/c7gsiiiWTKttzvVrsZOY5PLc5IfYw09Ftjknm8jjczimEDjR0ojSqX4+F5H9m3Ou7Kz38tjhTJeXbeXxs+Jcim+Cj52V8m2OTbgvIpMPlCXywIfaVUL2BMyQYm2/NTFonDNTf9uXQbzn29vyCSk+CNYmBimeP03IFD6/J2Qb7BsDIuZWomnPTDXPYTMwcCh5qjzzYMUgDA6+LzpsRuEwC/1dSZBY5PkTkTW5P8sX3Y6IkWVWcrQnHhQoLjofVzpOKwLFivlRNmetrZa1v2GsF3xiRLEWOVDhJMc5E7ZGLLPW1+CSiGwBnILpro7E62RdJMhmxsyN/KOCTTMtcVYVXnWsHQpDE7KTE8lISk+StaT4G7ggMcH3PufoXd6DVytSOhMy+dLQgi+DusQgJfhjE/H6m8861k6HHxOya3XXS/Ez7pgbGfS6HSO8IpWjT7M5qzHdFKiKVC/rImZWNVOjLJnl6lW+h4dElL/r89Rztj1ZOx3mRXXaF5T53rHnzsCxRkQUq26rQzYsc/PrHE5LclXlB17MBF+BqkJm2uGW2yI1PqpFvg6VZvegpBVuCJTKaqpWzgsLAWWoWXCnQ0u11msu7OY4berif9i7+sU7PcDqd8NGUA5+y/Od5fz/IAp3wFSn5WbGbcpXIK9qIKz37itdfbTZIvNdAmVtcMTp3odlTL4LFoM8f7Wr1Q28N6Zqrltgm7NOR9C/0clkTZh2w5BiV48oJzB5U27OLNXO6qnY63L4fO20uSCQ1bseawnSZqmVzvXYqmAh02G/z38MC+roa0Hf4OJPtdaNdrThjt/LvEg52Qr7woVM/ibKlPeXwRU+08b+/oVpduVZ9Nltt1feBy/6WW+lkpejdIt9QpaZklLa247DphvoeputzQlidHA8cp6jfESqLFt7m/B/AQYAHXZwbpBrmzcAAAAASUVORK5CYII="
																alt=""
															/>
														</div>
														<div className="info-text">
															<span>Office Address</span>
														</div>
													</div>
												</div>
												<div className="info-item">
													<h2>info@edefytheme.com</h2>
													<div className="info-wrap">
														<div className="info-icon">
															<img
																src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAYAAADXYyzPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTQ3QzJCRUM2NkJGMTFFQTkwNzlGNUM5NjA5MEJEQjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTQ3QzJCRUI2NkJGMTFFQTkwNzlGNUM5NjA5MEJEQjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0ZGY3MjMtMWY3ZC1kMjQyLTg1MzItMDI1YTg1NDAyNWJmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUtZmIxODgwNTA2ODZjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rbRbawAAAlZJREFUeNqslk1IVFEUx2fGpwZB2zZBizTsi6IysSSFCoSgIFomqC36UCjCbWFtIzGCPij6pl0IbSpwUVFRORYEFZUERQUG0Qchkqb9DvwHDo83M29m3oXfnPfevXP/75xz7z0vPV21KEUbhK2wAGpgNpVsS8M/GIcROBDwcxb2aMAvmIHahIVN9JscMxZm+Ol2A27DXAjkecVUTY8FYNfnnM4KE6iGd/AIuuA79Mrzoo1Ji7sb1O3GHIO7YM5uyrh+8/wy9MC9xGIc1B3FXID3vGQ79qWJ54Tny5rHWWiFhwmJHtHtOtnlKbltbcqNb1LYN8DVCkQPSXQS1uLtT3X99cK+WW5b4DR0wJ0yRA9jTsBbqEd0NDwmKPD/Hi39bfAEmuPsbxfeL7AK0cmocZki82xX2Ju08UvJ6fp8onGEUwr7TVgDlwqI9kp0TDn9VGjSTMy07YTX0AnPtPfDnp7S7caonJYrbAttqY6+Rh/2UHit3eDZnCSELbz74CsshiFYqfD3OVHb+1egDV5UKnxe4c1qgX2AHRIwexw+wmrC+wA69aINeD0MNfkmDop4ahMNw5ZQnz2fUNhbEZxwZ3c3gp+5tL08ynVj1OrO5/FFTf40QjTX9puwF3XiFv7rOh6zUTnPCVeHPO1S/dxc7pGJeIeq0TJ47rpqvfC47IA8vW81E/5UUiRUjU7CEsu5Hr/yObaD+wzs1Vu2J1UWET+I6A8u+7G39Bk0m+aby5+/j1WVSpk4buG4htnlV/WQFlBaIbcPv3klVKI4w6a0C34rvW/+CzAAXzq5Df9Tgu4AAAAASUVORK5CYII="
																alt=""
															/>
														</div>
														<div className="info-text">
															<span>Official Mail</span>
														</div>
													</div>
												</div>
												<div className="info-item">
													<h2>+91 256-987-239</h2>
													<div className="info-wrap">
														<div className="info-icon">
															<img
																src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzFBNDJFMTU2NkJGMTFFQUJDNUZBQThGREU5RkY0MzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzFBNDJFMTQ2NkJGMTFFQUJDNUZBQThGREU5RkY0MzAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0ZGY3MjMtMWY3ZC1kMjQyLTg1MzItMDI1YTg1NDAyNWJmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUtZmIxODgwNTA2ODZjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4Qz83wAAArFJREFUeNq8lkloFEEUhjszg3EJhpiLyqBRR3NQEVEiQoJxB7eLAUUkGiJexAVBcIkiigdR1IDEg0EQQZCoJ0ERFBQFl1NUkohxAfc9cTkYJ8bvwT/QhJ6ZnunJPPiorurl73rv1asqiIcnOBnYKqiDaTAMIvATnsP5cLzzpN8PFfgUXgr20TK4C1fhIcRhMqyAOeo38APHciF8RrO8DCtd42PsfXiLkAk6vZHYXpo90AZVjP/OVrhDAsYXqIXjMBw+wj+5fJbdR6gL8TDXNzRWzFiP14dDKURPQDkMlehFOAvn9NEYTFS8X0AToh0I9UI1/R/QmumMLZYvoVIxfQVjYRR8cD+IiCM3R+09+nfUH0HzFTYx1uRX2Fxs8Zmh/hE4pZk5XsJehngDzUEo7O9yL2HL0ieK6+t0mZdKWOJ9yvRD6WJcD91+RH3aNVjrJ7mmwy0nd2bJGE0nbMlTBeb/uUEVcfNMmnlQxPWUZMItVgzgO5TCTdgeQLRO1a0G3sFjxtpgvFvYsnW5St9oYS6qDjDhNVqSpUrUCvhldR3xmBX5Zhin8ue2zzA4gLBtHt1WUNS32VfYrGlvh5TF9R4vmmhvkBDbavMYX2zVMOHq+06eDA/YMm1PCJfkSxhXW3hLTPgT7PN4pm+AtLfa5hPSel2oJHNbl7a8bK0YevrNdh3NUdgW0aa9CK7raPNArIcrAYTbYQti9o1CsAIyEnYR50b3JjEEdmvtVirhlsC3bDYJBIto9mv9/tWPNPL8s1TbYrNKZ3nQ3SmZJTuBbIBJcHqgsjvV0We2fmBqvoXvwQV4BAs87h+wMkgsa7IRjqS5vxqewiXo1OmxVT8yX0feFsQ3Z3KYz+RAH1WRWaYqZ3V8JxyG9/AH4bJczjhhb2Cj650d6tuSGZRkk0lp/wUYAJRTz58Rj/4VAAAAAElFTkSuQmCC"
																alt=""
															/>
														</div>
														<div className="info-text">
															<span>Official Phone</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="wpo-blog-area section-padding">
					<div className="container">
						<div className="col-12">
							<div className="section-title text-center">
								<h2>Latest News</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
								<div className="wpo-blog-wrap">
									<div className="wpo-blog-img">
										<img
											src="http://follio-react.wpocean.com/static/media/1.8db7cac3.jpg"
											alt="blog"
										/>
									</div>
									<div className="wpo-blog-text">
										<ul>
											<li>
												<span>By Admin</span>
											</li>
											<li>. Nov 24, 2020</li>
										</ul>
										<h2>
											<a href="/blog-details">Helpful tips for become a successful designer</a>
										</h2>
										<a href="/blog-details">Read More...</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
								<div className="wpo-blog-wrap">
									<div className="wpo-blog-img">
										<img
											src="http://follio-react.wpocean.com/static/media/2.35c9abda.jpg"
											alt="blog"
										/>
									</div>
									<div className="wpo-blog-text">
										<ul>
											<li>
												<span>By Admin</span>
											</li>
											<li>. Nov 24, 2020</li>
										</ul>
										<h2>
											<a href="/blog-details">Helpful tips for become a successful designer</a>
										</h2>
										<a href="/blog-details">Read More...</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 col-12">
								<div className="wpo-blog-wrap">
									<div className="wpo-blog-img">
										<img
											src="http://follio-react.wpocean.com/static/media/3.43af2d95.jpg"
											alt="blog"
										/>
									</div>
									<div className="wpo-blog-text">
										<ul>
											<li>
												<span>By Admin</span>
											</li>
											<li>. Nov 24, 2020</li>
										</ul>
										<h2>
											<a href="/blog-details">Helpful tips for become a successful designer</a>
										</h2>
										<a href="/blog-details">Read More...</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wpo-footer-area undefined">
					<div className="container">
						<div className="wpo-footer-top">
							<div className="row">
								<div className="col-lg-2 col-md-3 col-sm-3 col-12">
									<div className="footer-logo">
										<img
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAxCAYAAABZAHL2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkVGQjNCMDAzOUYxMTFFQTlFNTVGNkM3NzBBQjJFODQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkVGQjNBRkYzOUYxMTFFQTlFNTVGNkM3NzBBQjJFODQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmVhM2NhMDctNDdjZS05ODQ3LWFlYzgtMDc0NDYwMTRkMzcxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUtZmIxODgwNTA2ODZjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+u39EmAAABn1JREFUeNrsXd1rXEUUn5uEaiVW82AfNCAkJT4o0bil2CptoCnqg4Lgxi8stpbkQRB90Kz/QaoPlT6ZqIgFoW0QxArG7hZbsY0IobbkQYsJCMVCHhoxxY9gs55f7gksy+7cO3Pn3pm7mQM/QjJ3Pk7Ob8/MnDlzN1jd/ZwwILcSHiXsITxA6CN0EzoJ7YSbhBuEq4QrhDnCd4TvCf8k6Tg4d1x4yb90JKz7BGE/4WnCLZJnQcY7GPcTnuG//0s4RThG+JrwnzfJxpQ2jTqbCCOEn5lExQgSygT1niV8ye2NcvtePBGlspdwmTBB6DU8FrT3Abc/5E3jidhINhM+JFQI96U8JrRf5v42exN5ItZ6qh8JhzIe2yHut9ebyRNxgHCBd8I2BP3OEB72ptq4RAQJzxK2Wh7jXYRvPRlbWzok0/E0YYsj49zC49lJmE/SUBAEuTNStVotS/TZl/R5V4mIDcIXDnjCRp4R49pB+HuDOYyhlJ93cmo+anFNGGfNeNRPZK2/RtxrYHeMOOB7hBdFeOw3wD/x+7tcnnQ37eOMZqf+LsIE4Xo1lOv8e1dWYwhqzpo3MUl04oRVwgnCOOFSjOf7CSXC8xiDRn+/cBsrGmfNVQP/txKttQ5nSJSqZM0XGHi+3OTDXclqTVnrEV/RJOGv7PFeiEnCda8JD7mL66sKxnnA+zIjJC9IZpghKu/JkojYtLytUf+0CMMqM5r9/8D1T2vUfUskS9rwEkrU9JspEZFF06tBwqcIywnHsMztqJIR433S8yixLCQsN0rE/RrTMbJmVgyNY4XbU52mX/Y8SrhJCAIQrdl69zCXZ7JZQVLrHyJ+KleV14QzKYznEREeKcbdwCCf8U7asKgk18o2K7OEpRhtTJGBJltls8J1kNpXtKVjB5NKJZ/wREwS3k0YFGFgfFGEx4W/x1gzHueNTxzBuB8TYVaQCcFuuCI2oDDpJm31j6l5j2Kd8Yjy2wkfifBawGeEI/wTv3/M5Unar5fdfoLNv8AjqpyiIOxyKYKEuIvyUKMPHeEgYTt7sWVJH0B/zDE5dwpE01yRQyLYcRbqdqYVnv4rPP0ttQKRkuoMIvYp9PdNRPmRJiSsFRDsfcKrkmemFYjY55AxsM4aiwh5rMfsYLhxqoONwqRNQuqsKU3rjKm5W2HMFyPWhAdjtnOAn28mPymMqdsREuL6xIRQi7t18VKknOVxmos6g4idCo38JikbVNjtBvy8Tj/10mnwf1uuRojEICMJ+i3kjYymdQYR2xUq/yUpU00b26rZT720WzZIMaFBag0zlqP1oFGd2yzqsygpu02hnZuW7RJnl7+2SBfRMcqxrM52XdPZFhFXRZj+30zuVWjrhkXPUIhYH+FUYjsyWAjDHDGYjWi26Lg3TEVnW0T8hHBNUj6g0NZVi3aJyoscJmPM1uxAYaR9Qn5+63quZSo628hewY74zYhnHldo74rBscU94lsXmWeYrDVIjWGWOHwxodGmC5KKzlkScZU9IUgoy9h5UMSPIULmDI5R9YivJ2KN1EymWpSI2jqbJOI5iadb5DXhtRjtvKPY71lHDdbUs7KHEC0o2jqbJOJFIQ94xxFcFx1WeB5ZNxccNUqhmYfgBX8rirbObQ4pgXNqvJ5O5Q7LKcUUMNMim4pGNMtcz/5JRWdXiIiLW58TtinWO+bqVIR1D3mB8QaeYSTCKAuOEzEVnV0gIjzhV7zFVxG88WHa8tinIsoRrD1JwCWkAmFMsmDPi0dMRWfbl492slfbplEX4QCrb5jlBfhkxKe9KOIHqReozSmXWZiWzrY8IkI0yMQ+r0lC3Gv+1BHblIRa7FEmoznZlBjX2aRHxLtp7mlShrNjHNvhxATB6v6Efb0mzF3cMuEhsKzAJfUk2TOjebmmkIbOJon4kggTY9MWXEM445hhZtkwJ4V6QBqepZTlRSUXdc7bBXWcorxuYFoxvmPlo63emh1iVKwQfa1dWIqRnV0yqKOJ543rjOukKiF+TK3NsqffSNkj4nRml6h7P6Lqu2+yej8ip3P1NDDO2nl2ozPZvEsSnfPiEf8U4dso5g38s7Ia8wKjYnkcWYq2zm05UA6ecFAkPz704rC4TsQ5no49CT0RrQl2xztMTMde3BcX14gIViNOeMabx3tEGzLPIYB+T0LvEbMWpHCtfzspEhj8t5N6IqYqjb6vGRnd50XC72v20hryvwADAE0RWbKbpnmhAAAAAElFTkSuQmCC"
											alt=""
										/>
									</div>
								</div>
								<div className="col-lg-6 col-md-9 col-sm-9 col-12">
									<div className="wpo-footer-menu">
										<ul>
											<li>
												<a href="/about">About</a>
											</li>
											<li>
												<a href="/protfolio">Portfolio</a>
											</li>
											<li>
												<a href="/blog">Blog</a>
											</li>
											<li>
												<a href="/contact">Contact</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-lg-4 col-md-12 col-sm-12 col-12">
									<div className="wpo-footer-social">
										<ul>
											<li>
												<a href="/">
													<i className="fa fa-facebook"></i>
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fa fa-twitter" aria-hidden="true"></i>
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fa fa-instagram" aria-hidden="true"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="wpo-footer-bottom undefined">
						<span>© 2020 Follio. All rights reserved</span>
					</div>
				</div>
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
		</div>
	);
};

export default Home;
