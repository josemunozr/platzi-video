import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../../related/containers/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux';

class Home extends Component {
  state = {
    modalVisible : false,
    media : null
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }
  render () {
    return(
      <HandleError>
        <HomeLayout>
          <Related 
            myPlaylist={this.props.myPlaylist}
            friendPlaylist={this.props.friendPlaylist}
          />
          <Categories 
            handleOpenModal={this.handleOpenModal}
            categories={this.props.categories}
            search={this.props.search}/>
          {
            this.state.modalVisible &&
              <ModalContainer>
                <Modal
                  handleClick={this.handleCloseModal}
                >
                  <VideoPlayer 
                    autoplay
                    title={this.state.media.title}
                    src={this.state.media.src}
                  />
                </Modal>
              </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

const mapStateToProps = (state, props) => {
  const categories = state.data.categories.map( 
    categoryId => state.data.entities.categories[categoryId]
  )

  const myPlaylist = state.data.myPlaylist.map(
    playListId => state.data.entities.myPlaylist[playListId]
  )

  const friendPlaylist = state.data.friendPlaylist.map(
    friendPlayListId => state.data.entities.friendPlaylist[friendPlayListId]
  )

  // console.log(myPlaylist);
  // console.log(friendPlaylist);
  
  return {
    myPlaylist: myPlaylist,
    friendPlaylist: friendPlaylist,
    categories: categories,
    search: state.search
  }
}

export default  connect(mapStateToProps)(Home);
