import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import MuneebKashif from '../assets/MuneebKashif.jpg';

const Testominial = () => {
	return (
		<>
			<div className="wpo-testimonial-area section-padding undefined">
				<div className="container">
					<div className="col-12">
						<div className="section-title">
							<h2>Testimonial</h2>
						</div>
					</div>
					<Carousel>
						<div className="wpo-testimonial-content">
							<p>
								I am very pleased to work with Zohaib. He is passionate to develop some creative things
								and love to do a efficient coding. I am very happy to work with him.
							</p>
							<div className="wpo-testimonial-item">
								<div className="wpo-testimonial-img">
									<img src={MuneebKashif} alt="" />
								</div>
								<div className="wpo-testimonial-thumb">
									<h4>Muneeb Kashif</h4>
									<span>Technical Product Manager</span>
								</div>
							</div>
						</div>
						{/* <div className="wpo-testimonial-content">
							<p>
								I am very pleased to work with Zohaib. He is passionate to develop some creative things
								and love to do a efficient coding. I am very happy to work with him.
							</p>
							<div className="wpo-testimonial-item">
								<div className="wpo-testimonial-img">
									<img src={MuneebKashif} alt="" />
								</div>
								<div className="wpo-testimonial-thumb">
									<h4>Muneeb Kashif</h4>
									<span>Technical Product Executive</span>
								</div>
							</div>
						</div> */}
						{/* <div className="wpo-testimonial-content">
							<p>
								I am very pleased to work with Zohaib. He is passionate to develop some creative things
								and love to do a efficient coding. I am very happy to work with him.
							</p>
							<div className="wpo-testimonial-item">
								<div className="wpo-testimonial-img">
									<img
										src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QONaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2YyZmVlMjYtM2Q3MS03YzQ2LWE1ZGYtZTA1NzljZTBiNzdlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDNzY3MEEwNDlFMzExRUFBMUM1RThCNjM0MDY4QUY3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDNzY3MDlGNDlFMzExRUFBMUM1RThCNjM0MDY4QUY3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI0NGRmNzIzLTFmN2QtZDI0Mi04NTMyLTAyNWE4NTQwMjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxY2FhNTRhLTkzY2ItNjg0Yi05ZGU1LWZiMTg4MDUwNjg2YyIvPiA8L3Jk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"
										alt=""
									/>
								</div>
								<div className="wpo-testimonial-thumb">
									<h4>Muneeb Kashif</h4>
									<span>Technical Product Executive</span>
								</div>
							</div>
						</div> */}
					</Carousel>
				</div>
			</div>
		</>
	);
};

export default Testominial;
