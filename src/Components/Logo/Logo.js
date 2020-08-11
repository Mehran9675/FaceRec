import React from 'react';
import Tilt from 'react-tilt';
import icon from './Logo.jpg';
import './Logo.css'

const Logo = () => {
	return(
	<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 60 }} style={{ height: 100, width: 150 }} >
		 <div className="Tilt-inner"> <img alt='logo' src={icon}/> </div>
		</Tilt>
	</div>
	);
}

export default Logo;