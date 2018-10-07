import React from 'react';
import './videos-layout.css'

function VideosLayout(props) {
	return (
		<section className="VideosLayout">
			{props.children}
		</section>
	)
}

export default VideosLayout;
