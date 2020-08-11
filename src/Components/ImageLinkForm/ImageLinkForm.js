import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return(
	<div>
		<p className='f5'>
			{'This Magic Brain will detect faces in your pictures. Give it a try.'}
		</p>
		<div className='center'>
			<div className='form pa4 br3 shadow-8'>
				<input className='f4 br2 pa1 w-70 top' type='text' onChange={onInputChange} />
				<button className='w-30 br2 grow f4 link ph3 pv2 dib white bg-purple' onClick={onSubmit}>Detect</button>
			</div>
		</div>
	</div>

	);
}

export default ImageLinkForm;