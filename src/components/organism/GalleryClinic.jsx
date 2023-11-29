import React, { useState } from 'react'
import img1 from '../Images/cb1.jpg'
import img2 from '../Images/cb2.jpg'
import img3 from '../Images/cb3.jpg'
import img4 from '../Images/cb4.jpg'
import img5 from '../Images/cb5.jpg'
import img6 from '../Images/cb6.jpg'
import img7 from '../Images/cb7.jpg'
import img8 from '../Images/cb8.jpg'
import img9 from '../Images/cb9.jpg'
import img10 from '../Images/cb10.jpg'

const Gallery = () => {
	const [filter, setFilter] = useState('all')

	const images = [
		{ category: 'sala-1', src: img1, alt: 'img' },
		{ category: 'sala-2', src: img2, alt: 'img' },
		{ category: 'sala-3', src: img3, alt: 'img' },
		{ category: 'sala-4', src: img4, alt: 'img' },
		{ category: 'sala-5', src: img5, alt: 'img' },
		{ category: 'sala-1', src: img6, alt: 'img' },
		{ category: 'sala-2', src: img7, alt: 'img' },
		{ category: 'sala-3', src: img8, alt: 'img' },
		{ category: 'sala-4', src: img9, alt: 'img' },
		{ category: 'sala-5', src: img10, alt: 'img' },
	]

	const handleFilter = (filterType) => {
		setFilter(filterType)
	}

	return (
		<div className="container py-4">
			<ul className="nav nav-pills justify-content-center mb-4">
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 ${filter === 'all' ? 'btn-active' : ''}`} onClick={() => handleFilter('all')}>
						Todo
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 ${filter === 'sala-1' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-1')}>
						Sala 1
					</button>
				</li>
				{/* Agrega más botones para otras categorías */}
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 ${filter === 'sala-2' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-2')}>
						Sala 2
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 ${filter === 'sala-3' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-3')}>
						Sala 3
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 ${filter === 'sala-4' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-4')}>
						Sala 4
					</button>
				</li>
				<li className="nav-item">
					<button className={`btn btn-primary mx-2 ${filter === 'sala-5' ? 'btn-active' : ''}`} onClick={() => handleFilter('sala-5')}>
						Sala 5
					</button>
				</li>
			</ul>

			<div className="row">
				{images
					.filter((image) => filter === 'all' || image.category === filter)
					.map((image, index) => (
						<div className="col-md-4 mb-3" key={index}>
							<a href={image.src} data-lightbox="gallery" data-title={image.alt}>
								<img src={image.src} alt={image.alt} className="img-fluid" />
							</a>
						</div>
					))}
			</div>
		</div>
	)
}

export default Gallery
