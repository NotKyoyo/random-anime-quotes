<h3 align="center"><strong>Generate random anime quotes from a huge database</strong></h3>
<center><strong>Powered by <a href="https://airi.kyoyo.me" target="_blank">Airi</a></strong></center>
<br>

## Access

First you'll need a API token which you can get by reading documentation. _[Click here](https://airi.kyoyo.me)_

## Installation:

### NPM

```bash
$ npm install random-anime-quotes
```

### YARN

```bash
$ yarn add random-anime-quotes
```

## Usage:

```javascript
const AnimeQuote =require("random-anime-quotes");
const api = new AnimeQuote("YOUR TOKEN"); // The Airi API Token

api.getQuote().then((res) => console.log(res));

// @return with this:
{
  _id: 3747,
  quote: "I don't know everything. I just know what I know.",
  anime: 'Nisemonogatari',
  said: 'Tsubasa Hanekawa'
}
```

## Functions

| **Functions** | **Description**               |
| :-----------: | ----------------------------- |
|   getQuote    | Generate random anime quotes. |
