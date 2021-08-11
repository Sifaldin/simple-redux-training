import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {

  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>

          <div className="content">
            {
              song.title !== this.props.favorite ?
                song.title : `${song.title} (Favorite!)`
            }
          </div>
        </div>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs.songsList, favorite: state.songs.favoriteTitle }
}

export default connect(mapStateToProps, {
  selectSong
})(SongList);