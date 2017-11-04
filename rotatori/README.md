# MusicPack
### by Gisela Rotatori

MusicPack es un sistema destinado a la busqueda de canciones y letras utilizando la API de [**musixmatch**](https://developer.musixmatch.com/).
El sistema contará con:
  - Busqueda de canciones por artista.
  - Busqueda de canciones por nombre.
  - Busqueda de canciones por album.

Información a la que se podrá acceder:
  - Información básica del artista.
  - Información de la canción (nombre/artista/album/fecha).
  - Letra de la canción.
  - Se podrá generar un "TrackList" con las letras de las canciones que se quiera.
  
#### Instrucciones para instalación
  * Para instalar depencias:
    
    ``` npm install ```
    
  * Para correr servidor local para pruebas (genera un servidor en localhost:7890)
    
    ```npm run server ```
  
  * En modo develop se utiliza webpack, para empaquetar utilizar comando:
    
    ``` npm run build ```
    
    
**TODO**
  - En caso que el tiempo alcance, agregar login y registro
  - Buscar alguna manera o API para poder reproducir la música ademas de poder ver la letra
