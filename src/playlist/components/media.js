import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      author: props.author
    };
	}
	
	handleClick = () => {
		this.props.openModal(this.props.id);
	}

	render () {

	  const { cover, title, author} = this.props;

	  return (
	    <div className='Media' onClick={this.handleClick}>
	      <div className='Media-cover'>
	        <img
						src={cover}
						alt=''
						width={260}
						height={160}
	          className='Media-image'
	        />
	      </div>
				<h3 className='Media-title'>{title}</h3>
				<p className='Media-author'>{author}</p>
	    </div>
	  );
	}
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
};

export default Media;
