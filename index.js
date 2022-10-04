const EventEmitter = require("events");
const fetch = require("phin");
const { api } = require("./package.json");

class AnimeQuote extends EventEmitter {
  /**
   * The main class
   * @param {token} [auth] - the authorization token
   */
  constructor(token) {
    super();

    this._auth = token;
  }

  async getQuote() {
    const auth = this._auth;
    if (!auth) throw new TypeError("Missing authorization token");
    return fetch({
      url: `${api}/quote`,
      headers: {
        Auth: auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    })
      .then((res) => {
        if (res.statusCode !== 200)
          switch (res.statusCode) {
            case 401:
              return {
                statusCode: res.statusCode,
                error: "Invalid token",
              };
            case 404:
              return {
                statusCode: res.statusCode,
                error: "Could not find any fact",
              };
            case 502:
              return {
                statusCode: res.statusCode,
                error: "Server down",
              };
            default:
              return {
                statusCode: res.statusCode,
                body: res.body,
                error: "Unknown error",
              };
          }
        return {
          id: res.body._id,
          quote: res.body.quote,
          anime: res.body.anime,
          name: res.body.name,
        };
      })
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = AnimeQuote;

/**
 * @typedef {object} Quote
 * @prop {number} _id
 * @prop {string[]} quote
 * @prop {string} anime
 * @prop {number} name
 */
