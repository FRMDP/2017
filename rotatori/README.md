# MusicPack
### by Gisela Rotatori

MusicPack es un sistema destinado a la busqueda de canciones y letras utilizando la API de [**musixmatch**](https://developer.musixmatch.com/).
El sistema contará con:
  - Busqueda de canciones por artista.
  - Busqueda de canciones por nombre.
  - Busqueda de canciones por país (en este caso trae el top 100 de temas más escuchados).
  - Busqueda de artistas.
  - Registro y Login de usuario
    - El usuario logueado podrá agregar canciones a su lista de favoritos, para encontrarlas más facilmente

Información a la que se podrá acceder:
  - Información básica del artista.
  - Información de la canción (nombre/artista/album/fecha).
  - Letra de la canción.
  - Se podrá generar un "TrackList" con las letras de las canciones que se quiera.
  
#### Instrucciones para instalación
  * Para instalar depencias:
    
    ``` npm install ```
    
  * Para correr servidor local para pruebas (genera un servidor en 127.0.0.1:7890)
    
    ```npm run start ```
  
  * En modo develop se utiliza webpack, para empaquetar utilizar comando:
    
    ``` npm run build ```
  
#### WebSocket
  * Para hacerlo funcionar:
    
    * Primero ir a la carpeta socket:
      
      ``` cd socket ```  

    * Instalar dependencias:

      ``` npm install ```
    
    * Para correr el servidor localmente (genera un servidor en localhost:3000)

      ``` npm run start ```

  * La API utilizada no cuenta con encabezado CORS por lo que para que el sistema funcione correctamente, hay que instalar una extención:
    - Para Chrome:
     [**Allow-Control-Allow-Origin:***](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=es-419) 
    - Para Firefox:
    [**CORS Everywhere**](https://addons.mozilla.org/es/firefox/addon/cors-everywhere/)
  
#### Importante!!
  - Al Agregar WebSocket, en el navegador Chrome no me tomaba el servidor, por el ya famoso error de CORS, no pude hacerlo funcionar ni con los addons. O me funcionaba la api o me funcionaba WebSocket pero no los dos. Pero sí funciona en **FireFox** 
  - Por cuestión de tiempo, no llego a encontrar una solución para Chrome.
