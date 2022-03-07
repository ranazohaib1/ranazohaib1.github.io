import React from 'react';

const Footer = () => {
	return (
		<>
			<div className="wpo-footer-area undefined">
				<div className="container">
					<div className="wpo-footer-top">
						<div className="row">
							<div className="col-lg-2 col-md-3 col-sm-3 col-12">
								<div className="footer-logo">
									<a className="underline-none" title="" href="/">
										<h1
											style={{
												color: 'white',
												fontFamily: 'cursive',
												letterSpacing: 4,
												textDecoration: 'none',
												fontWeight: '800',
											}}
										>
											Zohaib
										</h1>
									</a>
								</div>
							</div>
							<div className="col-lg-6 col-md-9 col-sm-9 col-12">
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
					<span>© 2022 Zohaib. All rights reserved</span>
				</div>
			</div>
		</>
	);
};

export default Footer;
