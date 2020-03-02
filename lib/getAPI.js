const request = require('request');
const {
    promisify
} = require('util'); // required part of the util module - the full util module is quite big, and we don't want all of it.

const promisifiedRequest = promisify(request);

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/weather?q=Blackpool,uk&units=metric&APPID=${process.env.APPID}`,
        json: true
    })
    return data.body
}

const getHarryPotter = async () => {
    let data = await promisifiedRequest({
        uri: `https://www.potterapi.com/v1/sortingHat`,
        json: true
    })
    return data.body
}


const chuckNorris = async () => {
    let data = await promisifiedRequest({
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
            'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
            'x-rapidapi-key': '1d1497a78cmsh6f73a3f6b9cf08bp11d9b5jsn60765e8a6827',
            accept: 'application/json'
        }
    })
    return data.body
};

const getPokemon = async () => {
    let data = await promisifiedRequest({
        uri: `https://pokeapi.co/api/v2/pokemon/ditto/`,
        json: true
    })
    return data.body
}

module.exports = {
    getWeather,
    getHarryPotter,
    chuckNorris,
    getPokemon
}