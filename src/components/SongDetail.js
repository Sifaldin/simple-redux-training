import React from 'react'
import { connect } from "react-redux";

const SongDetail = (props) => {
  return (
    <div>
      {!props.selectedSong ?
        <div> Select a song </div> : (
          <div>
            <h3>Details for:</h3>
            <p>
              Title: {props?.selectedSong.title || null}
              <br />
              Duration: {props?.selectedSong.duration || null}
            </p>
          </div>
        )
      }
    </div>
  )
}
const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);
