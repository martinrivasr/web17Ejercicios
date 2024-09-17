/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {

   // console.log("createPlaylist", playlists, "playlist name: ", playlistName)
    //playlists = [...playlists, playlistName];
    playlists = [...playlists, { name: playlistName, songs: [] }];
    console.log("createPlaylist", playlists, "playlist name: ", playlistName)
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
    console.log("getAllPlaylists" , playlists);
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      console.log("Entrado a removeplaylist");
      let removePlaylists = playlists.find(playlist =>{
        return (playlist.name === playlistName);
      });
      debugger
      if (removePlaylists){
        playlists = playlists.filter(playlist => playlist.name !== playlistName);
        console.log("Cancion eliminada, nuevo array", playlists);
      }
      else {
        throw new Error(`'no existe la playlist ${playlistName}`);
     }
    };
    
  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    const currentPlayList = playlists.find(playlist => playlist.name === playlistName);

    if (!currentPlayList) {
        throw new Error('No existe la playlist');
    } 
    // Verifica que `songs` esté inicializado, si no lo está, inicialízalo
    if (!Array.isArray(currentPlayList.songs)) {
        currentPlayList.songs = [];
    }

    // Agregar la canción al array de canciones de la playlist encontrada
    currentPlayList.songs.push({
        title: song.title,
        artist: song.artist,
        genre: song.genre,
        duration: song.duration,
    });

   // console.log("Playlist actualizada:", currentPlayList);
};
  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    //console.log("entrando a removeSongFromPlaylist", playlistName, title);
    const removeFromPlaylist = playlists.find(playlist =>{
      return (playlist.name === playlistName);
    });
    //debugger
    let removeSong = [];
    if(removeFromPlaylist){
       removeSong = removeFromPlaylist.songs.find(song => song.title === title);
    };
    if (removeSong){
      removeFromPlaylist.songs = removeFromPlaylist.songs.filter(song => song.title !== title);
      //console.log("Cancion eliminada, nuevo array", playlists);
    }
    else {
      throw new Error(`'no existe la cancion ${title} en la playlist ${playlistName}`);
   }
    //console.log("cancion a remover", removePlaylist, removeSong);
  };
  
  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    console.log("entrando a favoriteSong", );
  };
  
  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    console.log("entrando a sortSongs", );
    debugger
    
    if (criterion ==='title'){
      playlists.songs.sort((a, b) => a.title.localeCompare(b.title));
    }
  };

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog;