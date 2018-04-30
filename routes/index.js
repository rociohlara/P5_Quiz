var express = require ('express');
var app = express();
app.use (express.static('public'));
app.listen (3000);

<!DOCTYPE html>
<html>
 <head>
 <title><%= Rocio %></title>
 <link rel='stylesheet' href='/stylesheets/style.css' />
 </head>
 <body>
 <h1><%= title %></h1>
 <p>Welcome to <%= title %></p>
 <% include 6  %>
 </body>
</html>
