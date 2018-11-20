var playlist = {Wu_Tang: "Slow Blues"}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
