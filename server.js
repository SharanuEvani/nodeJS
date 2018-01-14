const express = require('express');

const hbs = require('hbs');


const fs = require('fs');

var app  = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');



app.use((req,res,next) =>{
	var now = new Date().toString();
	console.log(`${now} : ${req.method} ${req.url}`);
	var log = `${now} : ${req.method} ${req.url}`;
	fs.appendFile('server.log',log+'\n');
	next();
});
/*
app.use((req,res,next) =>{
	res.render('maintenance.hbs');
});*/
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res) =>{
	//res.send('<h1>Hello Express<h1>');
	/*res.send({
		name :'sss',
		likes:['a','b']hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
})

	});*/

	res.render('home.hbs',{
		pageTitle:'Home Page',
		welcomeMessage:'Welcome to NodeJS',
		currentYear: new Date().getFullYear()
	});
});

app.get('/about',(req,res) =>{
	//res.send('About page');

	res.render('about.hbs',{
		pageTitle:'About Page',
		currentYear: new Date().getFullYear()
	});

})

app.get('/home',(req,res) =>{
	//res.send('About page');

	res.render('home.hbs',{
		pageTitle:'Home Page',
		currentYear: new Date().getFullYear()
	});

})

app.get('/bad',(req,res) =>{
	res.send({
		errorMessage :'Unable to handle request'
	});
})

app.listen('8000',()=>{
	console.log('Server is up port 8000')
});