var express = require ('express');
var app = express();
app.use (express.static('public'));
app.listen (3000);

<!DOCTYPE html>
<html>

<head>
  <title>CORE</title>
</head>

<body>

<h1> Rocio</h1>

<p>
  <img src='images/indice.jpeg'>
</p>
 


</body>
</html>
