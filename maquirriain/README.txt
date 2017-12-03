Pasos a seguir:
  1- Abrir la terminal.  
  2- Parar el servicio de MySql (si es que no se cambio los puertos por default)
  3- Ejecutar: docker run --name mysql-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=newspaper_db -p 3306:3306 -d mysql:latest
  4- Descargarse: https://github.com/UTN-MDP/newspaper-api
  5- Sobre la carpeta newspaper ejecutar ./mvnw spring-boot:run
  6- Ubicarse en la carpeta Maquirriain.
  7- Poner el comando 'npm run build'.
  8- Poner el comando 'npm start'.
  9- Se abrira el navegador y podras utilizar el diario.
  10- Abrir la termial, ir a la carpeta raiz del proyecto y poner node index.js
