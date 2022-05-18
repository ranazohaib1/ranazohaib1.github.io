import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faMagnifyingGlass, faMobileScreenButton, faImages } from '@fortawesome/free-solid-svg-icons';

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
														<div className="wpo-service-icon d-flex justify-content-center align-items-center">
															<FontAwesomeIcon
																icon={faDisplay}
																color="#1a1950"
																style={{ paddingLeft: '10px' }}
																size="3x"
															/>
														</div>
													</div>
													<div className="wpo-service-text">
														<h2>Web Development</h2>
														<p>Websites for personal and business porposes</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="wpo-service-wrap">
													<div className="wpo-services-icon-wrap">
														<div className="wpo-service-icon-2 d-flex justify-content-center align-items-center">
															<FontAwesomeIcon
																icon={faImages}
																color="#1a1950"
																style={{ paddingLeft: '15px' }}
																size="3x"
															/>
														</div>
													</div>
													<div className="wpo-service-text">
														<h2>Web Design</h2>
														<p>Develop Responsive designs for web and app as well</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="wpo-service-wrap">
													<div className="wpo-services-icon-wrap">
														<div className="wpo-service-icon-3 d-flex justify-content-center align-items-center">
															<FontAwesomeIcon
																icon={faMobileScreenButton}
																color="#1a1950"
																style={{ paddingLeft: '15px' }}
																size="4x"
															/>
														</div>
													</div>
													<div className="wpo-service-text">
														<h2>App Development</h2>
														<p>React Native App for personal and business purposes</p>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
												<div className="wpo-service-wrap">
													<div className="wpo-services-icon-wrap">
														<div className="wpo-service-icon-4 d-flex justify-content-center align-items-center">
															<FontAwesomeIcon
																icon={faMagnifyingGlass}
																color="#1a1950"
																style={{ paddingLeft: '15px' }}
																size="3x"
															/>{' '}
														</div>
													</div>
													<div className="wpo-service-text">
														<h2>SEO</h2>
														<p>Search Engine Optimization </p>
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
