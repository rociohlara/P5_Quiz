"# P5_Quiz" 
1) crear una app con express-generrator que utilice renderizador de vistas ejs
$ npm install express-generator 
Crear Esqueleto de una Aplicación:
$ express --ejs P5_Quiz// crea ficheros iniciales (Instalado globalmente)
$ ./node_modules/.bin/express --ejs P5_Quiz // (Instalado localmente)
$ cd P5_Quiz
$ npm install // instala las dependencias declaradas en package.json
Ejecutamos la aplicación:
$ node bin/www
$ npm start (apare3ce algo como P5_Quiz@000 start c\ P5_Quiz node ./bin/www) (escribir en el buscador localhost:3000 para comprobar)
http://localhost:3000

2) Crear lo elementos de la primitiva GET/credits.  Añadir primero en el fichero routes/index.js la acción del controlador (MW que atiende a GET /credits), que renderiza la vista ejs de la página de créditos. Añadir la vista ejs de credits en el fichero views/credits.ejs. La aplicación ya debe responder al URL localhost:3000/credits una vez completados estos dos pasos correctamente.

