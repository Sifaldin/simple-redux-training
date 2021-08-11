import { combineReducers } from "redux"

const songsReducer = () => {
  return {
    songsList:  [
    { title: 'No Scrubs', duration: '4:40' },
    { title: 'Hey Delilah', duration: '4:40' },
    { title: 'ehehehe', duration: '4:40' },
    { title: 'In The End', duration: '3:30' }
  ],
  favoriteTitle: 'In The End'
}
}


const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer });