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

Paso 3) Crear los elementos de la primitiva GET /quizzes.
-Crear el directorio models y definir el modelo en un nuevo fichero models/index.js. En el
fichero se debe definir la tabla quizzes y exportarla. Además se debe sincronizar la BBDD (con
sync()) e inicializarla con bulkCreate(..) (ver primero temas de BBDD).
- El fichero routes/index.js debe importar el modelo y añadir la acción del controlador (MW
que atiende a GET /quizzes). Este MW busca primero todos los quizzes con quizzes.findAll() y
luego renderiza la vista ejs de la página de créditos.
- Añadir la vista ejs de credits en el fichero views/credits.ejs. La vista recibida un array de
quizzes. Debe utilizar un bucle para generar el HTML de la lista de quizzes a partir del array de
quizzes.
La aplicación ya debe responder al URL localhost:3000/quizzes una vez completados estos pasos
correctamente.
