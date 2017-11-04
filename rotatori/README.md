### Diario UTN Rotatori

#### Instrucciones básicas
*   Para instalar las dependecias, utilizar el comando: npm install
*   Para correr el servidor, utilizando live-server, usar el comando: npm run server
*   Para empaquetar con webpack, el comando es: npm run build


#### Generalidades
*   El diario tiene las siguientes vistas;
    *	Ver todas las noticias
    *	Ver una noticia (por id)
    *	Ver noticias por categorias (por id)
    *	Agregar noticias (solo por url)
*	Se utiliza localStorage para el almacenamiento. Las claves utilizadas son: news, categories y reporters.
*   Sólo se pueden agregar noticias, no se pueden agregar reporteros o categorias, como tampoco eliminar noticias ya creadas.