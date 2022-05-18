import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Icon from '../assets/zohaib.png';
const Footer = () => {
	return (
		<>
			<div className="wpo-footer-area undefined">
				<div className="container">
					<div className="wpo-footer-top">
						<div className="row d-flex justify-content-between">
							<div className="col-lg-2 col-md-3 col-sm-3 col-12">
								<div className="footer-logo">
									<a className="underline-none mt-0" title="" href="/">
										<img src={Icon} width="100" height="100" />
									</a>
								</div>
							</div>
							{/* <div className="col-lg-6 col-md-9 col-sm-9 col-12">
								<div className="wpo-footer-menu">
									<ul>
										<li>
											<a className="underline-none" title="" href="/">
												Home
											</a>
										</li>
										<li>
											<a className="underline-none" title="" href="#about">
												About
											</a>
										</li>
										<li>
											<a className="underline-none" title="" href="#about">
												Skills
											</a>
										</li>
										<li>
											<a className="underline-none" title="" href="#about">
												Services
											</a>
										</li>
										<li>
											<a className="underline-none" title="Award" href="#about">
												Award
											</a>
										</li>
										<li>
											<a className="underline-none" title="" href="#about">
												Work
											</a>
										</li>
										<li>
											<a className="underline-none" title="" href="/">
												Blog
											</a>
										</li>
									</ul>
								</div>
							</div> */}
							<div className="col-lg-4 col-md-9 col-sm-9 col-12">
								<div className="wpo-footer-social">
									<ul>
										<li>
											<a href="/">
												<FontAwesomeIcon
													icon={faFacebook}
													size="2x"
													color="rgb(234, 76, 137)"
												/>
											</a>
										</li>
										<li>
											<a href="/">
												<FontAwesomeIcon
													icon={faLinkedin}
													size="2x"
													color="rgb(65, 118, 250)"
												/>
											</a>
										</li>
										<li>
											<a href="/">
												<FontAwesomeIcon
													icon={faInstagram}
													size="2x"
													color="rgb(163, 41, 166)"
												/>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wpo-footer-bottom undefined">
					<span>© 2022 Zohaib. All rights reserved</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
