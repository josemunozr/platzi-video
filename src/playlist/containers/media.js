import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';

class MediaContainer extends Component {
  render() { 
    return (
      <Media 
        key={this.props.data.get('id')}
        author={this.props.data.get('author')}
        cover={this.props.data.get('cover')}
        title={this.props.data.get('title')}
      />
    )
  }
}
 
function mapStateToProps(state, props) {
 return {
   data: state.get('data').get('entities').get('media').get(props.id)
 }
}

export default connect(mapStateToProps)(MediaContainer);