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
   * Array of playlists in the catalog.git pull origin master --allow-unrelated-histories

   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    const existPlaylist = playlists.find(playlist=> playlist.name === playlistName)
    if (existPlaylist){
      throw new Error (`La playlist ${playlistName} ya existe!`)
    }
    playlists = [...playlists, { name: playlistName, songs: [] }];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      let removePlaylists = playlists.find(playlist => playlist.name === playlistName);
      if(!removePlaylists){
        throw new Error(`'no existe la playlist ${playlistName}`);
      }
      playlists = playlists.filter(playlist => playlist.name !== playlistName);
    };
    
  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  


const addSongToPlaylist = (playlistName, song) => {
  playlists = playlists.map(playlist => {
      if (playlist.name === playlistName) {
          return {
              ...playlist,
              songs: [...playlist.songs, { 
                  title: song.title,
                  artist: song.artist,
                  genre: song.genre,
                  duration: song.duration,
                  favorite: false
              }]
          };

        }
      return playlist; 
  });
};


  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const removeFromPlaylist = playlists.find(playlist =>playlist.name === playlistName);
    if(!removeFromPlaylist){
      throw new Error(`no existe la Playlist ${playlistName}`);
    };
    const removeSong = removeFromPlaylist.songs.find(song => song.title === title);
    if (!removeSong){
      throw new Error(`no existe la cancion ${title} en la playlist ${playlistName}`);
    }
    removeFromPlaylist.songs = removeFromPlaylist.songs.filter(song => song.title !== title);
  };
  
  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    playlists = playlists.map(playlist =>{
      if(playlist.name === playlistName){
         playlist.songs = playlist.songs.map(song =>{
          if(song.title === title){
            song.favorite = true;
          }
          return song;
         })
      }
    return playlist;
    })
  };
  
  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    const playlist = playlists.find(playlist => playlist.name === playlistName);
  
    if (!playlist){
      throw new Error(`'no existe la Playlist ${playlistName}`);
    }
  
    if (criterion ==="title"){
      playlist.songs.sort((a,b) => a.title.localeCompare(b.title));
    } else if(criterion === "artist"){
      playlist.songs.sort((a,b) => a.artist.localeCompare(b.artist));
    } else if (criterion === "duration"){
      playlist.songs.sort((a,b) => a.duration - b.duration)
    }
  };    

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};



export default musicCatalog;