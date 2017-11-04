const apiKey = 'apikey=23859bca7afed7ac1b4ed666434bb118';
const url = 'http://api.musixmatch.com/ws/1.1/';
const methods = [
    {
        name: 'artistCountry',
        endpoint: 'chart.artists.get?',
        parameters: {
            country: '&country=',
            page: '&page=',
            pageSize: '&page_size='
        }
    },
    {
        name: 'tracksCountry',
        endpoint: 'chart.tracks.get?',
        parameters: {
            country: '&country=',
            page: '&page=',
            pageSize: '&page_size=',
            hasLirics: '&f_has_lyrics=' //[1]
        }
    },
    {
        name: 'trackSearch',
        endpoint: 'track.search?',
        parameters: {
            nameTrack: '&q_track=',
            nameArtist: '&q_artist=',
            anyWordLyrics: '&q_lyrics=',
            anyWord: '&q=',
            anyWordTrAr: '&q_track_artist=', //Any world in the song title or artist name
            artistId: '&f_artist_id=',
            lyricsLanguage: '&f_lyrics_language=',
            page: '&page=',
            pageSize: '&page_size=',
            artistRating: '&s_artist_rating=', // [asc/desc] Popularidad
            trackRating: '&s_track_rating='
        }
    },
    {
        name: 'trackGet',
        endpoint: 'track.get?',
        parameters: {
            trackId: '&track_id=',
        }
    },
    {
        name: 'lyricGetId',
        endpoint: 'track.lyrics.get?',
        parameters: {
            trackId: '&track_id=',
        }
    },
    {
        name: 'matchTrack',
        endpoint: 'matcher.track.get?',
        parameters: {
            nameTrack: '&q_track=',
            nameArtist: '&q_artist=',
            nameAlbum: '&q_album='
        }
    },
    {
        name: 'artistGet',
        endpoint: 'artist.get?',
        parameters: {
            artistId: '&artist_id='
        }
    },
    {
        name: 'artistSearch',
        endpoint: 'artist.search?',
        parameters: {
            artistName: '&q_artist=',
            artistId: '&f_artist_id=',
            page: '&page=',
            pageSize: '&page_size='
        }
    },
    {
        name: 'artistAlbum',
        name: 'artist.albums.get?',
        parameters: {
            artistId: '&artist_id=',
            albumName: '&q_album_name=', //[1/0]
            release: '&s_release_date=', //[asc/desc]
            page: '&page=',
            pageSize: '&page_size='
        }
    },
    {
        name: 'albumGet',
        endpoint: 'album.get?',
        parameters: {
            albumId: '&album_id='
        }
    },
    {
        name: 'albumTrackGet',
        endpoint: 'album.tracks.get?',
        parameters: {
            albumId: '&album_id=',
            page: '&page=',
            pageSize: '&page_size='
        }
    },
    {
        name: 'trackSnippet',
        endpoint: 'track.snippet.get?',
        parameters: {
            trackId: "&track_id="
        }
    }

]

export default {
    getMethod(st){
        return methods.find( m => m.name == st);
    },
    getRtArtistSearch(type, search){
        const route = this.getMethod('artist.search');
        console.log(route);
        let string = url + route.name + '?' + apiKey + route.parameters.artistName + search;
        return string;

    },
    getRtArtist(id){
        const route = this.getMethod('artist.get');
        return url + route.name + '?' + apiKey + route.parameters.artistId + id;

    },
    getRtTrackSearchByArtist(name){
        const route = this.getMethod('track.search');
        return url + route.name + '?' + apiKey + route.parameters.nameArtist + name;
    },
    getRoutes(){
        const ob = arguments;
        const val = arguments.length;
        for(let i=0;i<val; i++){
            console.log(ob[i]);
        }
        console.log(arguments);
    }
}