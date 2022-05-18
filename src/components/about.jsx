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
											<h2>I create Interactive software's</h2>
											<p>
												A Full-stack developer working with the cutting edge MERN technology
												who's not only passionate to develop end-to-end SaaS-based solutions but
												also in constant pursuit of finding work that makes an impact on the
												technical growth of our society. Developing efficient and scalable
												software architectures resulted in not only the imminent growth of my
												technical efficiency but also fed my learning curve like nothing else. I
												take pride in mentioning my mentors and colleagues who have had an
												enormous impact in shaping my personality as it is today, be it the
												technical soundness or all the other soft skills that I gained. My name
												is Zohaib Dilshad and I am eager to collaborate with you!
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
