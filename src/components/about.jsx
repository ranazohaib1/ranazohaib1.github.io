import React from 'react';

const About = () => {
	return (
		<>
			<div id="about" className="about-area section-padding ">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>About Me</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="wpo-about-wrap">
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
												My name is John Smith. I am a web designer and developer.Lorem ipsum
												dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
												incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
												ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
												facilisis.{' '}
											</p>
											<a className="theme-btn" href="#contact">
												Lets Talk
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
