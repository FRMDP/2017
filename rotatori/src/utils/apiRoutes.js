const apiKey = 'apikey=23859bca7afed7ac1b4ed666434bb118';
const url = 'http://api.musixmatch.com/ws/1.1/';
const methods = [
    {
        name: 'artistCountry',
        endpoint: 'chart.artists.get?',
        parameters: [
            {country: '&country='},
            {page: '&page='},
            {pageSize: '&page_size='}
        ]
    },
    {
        name: 'tracksCountry',
        endpoint: 'chart.tracks.get?',
        parameters: [
            {country: '&country='},
            {page: '&page='},
            {pageSize: '&page_size='},
            {hasLirics: '&f_has_lyrics='} //[1]
        ]
    },
    {
        name: 'trackSearch',
        endpoint: 'track.search?',
        parameters:[ 
            {nameTrack: '&q_track='},
            {nameArtist: '&q_artist='},
            {anyWordLyrics: '&q_lyrics='},
            {anyWord: '&q='},
            {anyWordTrAr: '&q_track_artist='}, //Any world in the song title or artist name
            {artistId: '&f_artist_id='},
            {lyricsLanguage: '&f_lyrics_language='},
            {page: '&page='},
            {pageSize: '&page_size='},
            {artistRating: '&s_artist_rating='}, // [asc/desc] Popularidad
            {trackRating: '&s_track_rating='}
        ]
    },
    {
        name: 'trackGet',
        endpoint: 'track.get?',
        parameters: [
            {trackId: '&track_id='}
        ]
    },
    {
        name: 'lyricGetId',
        endpoint: 'track.lyrics.get?',
        parameters: [
            {trackId: '&track_id='}
        ]
    },
    {
        name: 'matchTrack',
        endpoint: 'matcher.track.get?',
        parameters: [
            {nameTrack: '&q_track='},
            {nameArtist: '&q_artist='},
            {nameAlbum: '&q_album='}
        ]
    },
    {
        name: 'artistGet',
        endpoint: 'artist.get?',
        parameters: [
            {artistId: '&artist_id='}
        ]
    },
    {
        name: 'artistSearch',
        endpoint: 'artist.search?',
        parameters: [
            {artistName: '&q_artist='},
            {artistId: '&f_artist_id='},
            {page: '&page='},
            {pageSize: '&page_size='}
        ]
    },
    {
        name: 'artistAlbum',
        name: 'artist.albums.get?',
        parameters: [
            {artistId: '&artist_id='},
            {albumName: '&q_album_name='}, //[1/0]
            {release: '&s_release_date='}, //[asc/desc]
            {page: '&page='},
            {pageSize: '&page_size='}
        ]
    },
    {
        name: 'albumGet',
        endpoint: 'album.get?',
        parameters: [
            {albumId: '&album_id='}
        ]
    },
    {
        name: 'albumTrackGet',
        endpoint: 'album.tracks.get?',
        parameters: [
            {albumId: '&album_id='},
            {page: '&page='},
            {pageSize: '&page_size='}
        ]
    },
]

export default {
    getMethod(st){
        return methods.find( m => m.name == st);
    },
    getIsKey(params, nameKey){
       const p = Object.keys(params);
       return p[0].toUpperCase() == nameKey.toUpperCase()
    },
    getRoutes(){
        const route = this.getMethod(arguments[0]);//arguments[0] contiene el nombre del endpoint
        let st = url + route.endpoint + apiKey;
        let ar = 1;
        let i = 0;
        while(ar<arguments.length){ //recorro resto de argumentos 
            while(i<route.parameters.length){ //recorro los parametros del endpoint
                const p = route.parameters[i]; //asigno llave/valor de la posicion del parametro
                if(this.getIsKey(p, arguments[ar].name)) //veo si es el que corresponde
                    break;//si es ya no sigo avanzando, corto el segundo while
                else{
                    i++; //sigo buscando en el siguiente parametro
                }
            }
            st += Object.values(route.parameters[i]) + arguments[ar].value;//encontre el parametro, le asigno el valor (ej &artist_id=) + el valor del argumento
            ar++; //busco en el siguiente argumento
        }
        return st; //retorno el string con la url para el get
    }
}