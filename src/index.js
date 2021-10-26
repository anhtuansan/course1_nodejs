const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');

const app = express()
const port = 3000

//Static file
app.use(express.static(path.join(__dirname, 'public')));
console.log("...PATH: ",__dirname);

//Http logger
app.use(morgan('combined'))


//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//Conf path to home
app.set('views', path.join(__dirname, 'resources/views'));
console.log('...PATH: ',path.join(__dirname, 'resources/views'));

//Show out in main layout {{{body}}}
app.get('/',  (req, res) =>  {
  res.render('home');
})
app.get('/news',  (req, res) =>  {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})