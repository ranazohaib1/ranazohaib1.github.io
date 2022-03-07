import React from 'react';

import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
	return (
		<>
			<section id="/" className="wpo-hero-style-2">
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
												<FontAwesomeIcon icon={faFacebook} style={{ color: '#ea4c89' }} />
											</a>
										</li>
										<li>
											<a
												href="https://www.linkedin.com/in/zohaib-dilshad-510237207/"
												target="_blank"
												rel="noreferrer noopener"
											>
												<FontAwesomeIcon icon={faLinkedin} style={{ color: '#4176fa' }} />
											</a>
										</li>
										<li>
											<a href="/">
												<FontAwesomeIcon icon={faInstagram} style={{ color: '#a329a6' }} />
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
		</>
	);
};

export default Banner;
