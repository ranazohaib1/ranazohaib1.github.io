import React, { useEffect, useState } from 'react';

const Navbar = () => {
	const [active, setActive] = useState(0);

	return (
		<>
			<div className="fixed-navbar animated fadeInDown active">
				<div className="header-style-1">
					<div className="container">
						<div className="header-content">
							<div className="logo">
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
							<nav class="d-lg-block d-none header-b">
								<ul>
									<li>
										<a
											className={`underline-none ${active === 0 ? 'active' : ''}`}
											title=""
											href="#/"
											onClick={() => setActive(0)}
										>
											Home
										</a>
									</li>
									<li>
										<a
											className={`underline-none ${active === 1 ? 'active' : ''}`}
											data-bs-toggle="tab"
											title=""
											href="#about"
											onClick={() => setActive(1)}
										>
											About
										</a>
									</li>
									<li>
										<a
											className={`underline-none ${active === 2 ? 'active' : ''}`}
											data-bs-toggle="tab"
											title=""
											onClick={() => setActive(2)}
											href="#skills"
										>
											Skills
										</a>
									</li>
									<li>
										<a
											className={`underline-none ${active === 3 ? 'active' : ''}`}
											data-bs-toggle="tab"
											title=""
											onClick={() => setActive(3)}
											href="#services"
										>
											Services
										</a>
									</li>
									<li>
										<a
											className={`underline-none ${active === 4 ? 'active' : ''}`}
											title="Award"
											onClick={() => setActive(4)}
											href="#award"
										>
											Award
										</a>
									</li>
									<li>
										<a
											className={`underline-none ${active === 5 ? 'active' : ''}`}
											title=""
											onClick={() => setActive(5)}
											href="#work"
										>
											Work
										</a>
									</li>
									<li>
										<a
											className={`underline-none ${active === 6 ? 'active' : ''}`}
											title=""
											onClick={() => setActive(6)}
											href="#contact"
										>
											Contact
										</a>
									</li>
								</ul>
							</nav>
							<nav className="d-lg-block d-none header-b"></nav>
							<div className="contact">
								<div className="cart-search-contact">
									<a
										className="theme-btn underline-none"
										href="#contact"
										style={{ textDecoration: 'none' }}
									>
										Lets Talk
									</a>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
