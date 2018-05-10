const Sequelize = require('sequelize');

const options = {	logging: false, operatorsAliases: false};
const sequelize = new Sequelize("sqlite:quizzes.sqlite", options);

const quiz = 
      //modelo de datos
sequelize.define(	
	'quiz',
	{ question: {
		type: Sequelize.STRING,
		unique: { msg: "Esta pregunta ya está registrada"},
		validate: {notEmpty: {msg: "Asegurese de que la pregunta no está vacía"}}
	},
	  answer:{
	  	type: Sequelize.STRING,
	  	validate: {notEmpty: {msg: "Asegurese de que la pregunta no está vacía"}}
	  }
});

//para la base de datos, si no está creada la inicializo asi

sequelize.sync().then(() => sequelize.models.quiz.count()).then((count) => {	
	if (!count){
		return sequelize.models.quiz.bulkCreate([
				{ question: "¿capital de Italia?", answer: "Roma" },
				{ question: "¿capital de Francia?", answer: "Paris" },
				{ question: "¿capital de España?", answer: "Madrid" },
				{ question: "¿capital de Portugal?", answer: "Lisboa" }
      	{ question: "¿capital de Arabia Saudita?", answer: "Riad" },
				{ question: "¿capital de Portugal?", answer: "Lisboa" }
      	{ question: "¿capital de Austria?", answer: "Viena" },
				{ question: "¿capital de Brasil?", answer: "Brasilia" }ç
      
				]);
			}
})
.catch( err => {
	console.log(err);
});

module.exports = sequelize;
