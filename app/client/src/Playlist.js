
const createPlaylist = (tracks) => {
    const baseURI = "spotify:trackset:Playlist:";
    const trackIds = tracks.map((track) => (track.id));
    return `${baseURI}${trackIds.join()}`
}

export default createPlaylist;