const AnimeQuote = require("../index");
const api = new AnimeQuote("TOKEN");

api.getQuote().then((res) => console.log(res));
// if successful: { body }

// if failed, it will throw an error
