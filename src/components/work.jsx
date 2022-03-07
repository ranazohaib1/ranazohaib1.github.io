import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Work = () => {
	return (
		<>
			<div id="work" className="about-area section-padding" style={{ backgroundColor: '#171554' }}>
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Work</h2>
						</div>
					</div>
					<div className="pb-5" style={{ backgroundColor: '#070640', marginBottom: '0px !important' }}>
						<Carousel autoPlay transitionTime="600" infiniteLoop showThumbs={false}>
							<div>
								<img
									style={{ height: '100vh' }}
									src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
									alt="First slide"
								/>
								<p className="legend">Legend 1</p>
							</div>
							<div>
								<img
									style={{ height: '100vh' }}
									src="https://cdn.britannica.com/88/158788-050-314EBC88/Mount-Triumph-height-North-Cascades-National-Park.jpg"
									alt="Second slide"
								/>
								<p className="legend">Legend 2</p>
							</div>
							<div>
								<img
									style={{ height: '100vh' }}
									src="https://geographical.co.uk/media/k2/items/cache/852c2fa5e5468761c3ae8b796ca9be85_XL.jpg"
									alt="Third slide"
								/>
								<p className="legend">Legend 3</p>
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</>
	);
};

export default Work;
