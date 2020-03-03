const express = require('express'); // npm i express - this allows me to use express server in my project
const request = require('request'); // this will be replaced with fetch later on. Just want to see both sides. 
const path = require('path');
const hbs = require('express-handlebars');
const fs = require('fs');

// function inits
const app = express(); // initialised express to use its features
// const getWeather = require('./lib/getWeather');
const getAPI = require('./lib/getAPI');

// path is about to be set up
app.use(express.static(path.join(__dirname, 'public')));
// what is this doing? ^^^

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')


// getWeather();

// four http methods: GET, POST, PUT & DELETE - you may see CRUD for some other stacks, which stands for CREATE, READ, UPDATE & DELETE

// get is a function inside of express - for more info, look at express module on NPMJS
app.get('/', async (req, res) => { // each get method should have a req & res. Req = request. Res = response - standard naming convention.
    let data = await getAPI.getWeather()
    console.log(data);
    res.render('index')
    // For each file you want to load, you need a get.
});

app.get('/harryPotter', async (req, res) => {
    let data = await getAPI.getHarryPotter()
    console.log(data)
    res.render('harryPotter', {
        data,
        title: `You have been randomly sorted into: ${data}`
    })
})

app.get('/test', async (req, res) => {
    let data = await getAPI.chuckNorris()
    console.log(data)
    res.render('test', {
        data,
        title: `You have been given a random joke: ${data}`
    })
})

app.get('/pokemon', async (req, res) => {
    let data = await getAPI.getPokemon()
    console.log(data)
    res.render('pokemon', {
        data,
        title: `You have been given a pokemon: ${data}`
    })
})

app.get('/nasa', async (req, res) => {
    let data = await getAPI.getNasa()

    console.log(data)
    res.render('nasa', {
        data
    })
})

app.listen(3000, () => { // creates a connection on a specified port - localhost:3000 - the response I should get when I run... is 'cannot get /'
    console.log('I am listening on port 3000.');
});