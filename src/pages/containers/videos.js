import React, { Component } from 'react';
import VideosLayout from '../components/videos-layout';
import Categories from '../../categories/components/categories';
import Related from '../../related/containers/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';

class Videos extends Component {
  handleOpenModal = (id) => {
    this.props.actions.openModal(id)
  }
  handleCloseModal = (event) => {
    this.props.actions.closeModal()
  }
  componentDidMount() {
    const search = this.props.location.search;
    const id = search.split('=')[1];
    if (search) {
      this.handleOpenModal(id)
    }
  }
  render () {
    return(
      <HandleError>
        <VideosLayout>
          <Related 
            myPlaylist={this.props.myPlaylist}
            friendPlaylist={this.props.friendPlaylist}
          />
          <Categories 
            handleOpenModal={this.handleOpenModal}
            categories={this.props.categories}
            search={this.props.search}
            isLoading={this.props.isLoading}
          />
          {
            this.props.modal.get('visibility') &&
              <ModalContainer>
                <Modal
                  handleClick={this.handleCloseModal}
                >
                  <VideoPlayer 
                    autoplay
                    id={this.props.modal.get('mediaId')}
                  />
                </Modal>
              </ModalContainer>
          }
        </VideosLayout>
      </HandleError>
    )
  }
}

const mapStateToProps = (state, props) => {
  const categories = state.getIn(['data','categories']).map( 
    categoryId => state.getIn(['data','entities','categories',categoryId])
  )

  const myPlaylist = state.getIn(['data','myPlaylist']).map(
    playListId => state.getIn(['data','entities','myPlaylist',playListId])
  )

  const friendPlaylist = state.getIn(['data','friendPlaylist']).map(
    friendPlayListId => state.getIn(['data','entities','friendPlaylist',friendPlayListId])
  )

  let searchResult = list();
  const search = state.getIn(['data','search']);
  // const search = state.get('data').get('search');
  if (search) {
    const mediaList = state.getIn(['data','entities','media']);
    searchResult = mediaList.filter( 
      item => item.get('author').toLowerCase().includes(search.toLowerCase())
    ).toList();
  }

  return {
    myPlaylist: myPlaylist,
    friendPlaylist: friendPlaylist,
    categories: categories,
    search: searchResult,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Videos);
