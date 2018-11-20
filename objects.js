var playlist = {Wu_Tang: "Slow Blues"}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistname] = songTitle
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
