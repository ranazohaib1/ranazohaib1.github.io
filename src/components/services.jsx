import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
	return (
		<>
			<div id="services" className="about-area section-padding" style={{ backgroundColor: 'rgb(26 25 80)' }}>
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Services</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="wpo-about-wrap">
								<div className="wpo-about-item">
									<div className="wpo-service-item">
										<div className="row">
											<div className="col-lg-6">
												<div className="wpo-service-wrap">
													<div className="wpo-services-icon-wrap">
														<div className="wpo-service-icon">
															<FontAwesomeIcon icon="fa-solid fa-display-code" />
														</div>
													</div>
													<div className="wpo-service-text">
														<h2>Website</h2>
														<p>
															consectetur adipiscing elit, eiusmod tempor incididunt
															labore.
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
															consectetur adipiscing elit, eiusmod tempor incididunt
															labore.
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
															consectetur adipiscing elit, eiusmod tempor incididunt
															labore.
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
															consectetur adipiscing elit, eiusmod tempor incididunt
															labore.
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
		</>
	);
};

export default Services;
