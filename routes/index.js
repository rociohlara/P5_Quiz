var express = require('express');
var app = express();

var router = express.Router();
app.use(credits);
app.use(quizzes);

router.get(GET/credits);
router.get(GET/quizzes);

//Añadir además a la vista views/index.ejs dos hiperenlaces (créditos y quizzes) que permitan acceder a las nuevas vistas haciendo click en ellos.
