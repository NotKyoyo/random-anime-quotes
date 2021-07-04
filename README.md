<h3 align="center"><strong>Generate random anime facts with a huge database.</strong></h3>
<center><strong>Powered by <a href="https://airi.kyoyo.me" target="_blank">Airi</a></strong></center>
<br>

## Installation:

### NPM

```bash
$ npm install anime-quotes
```

### YARN

```bash
$ yarn add anime-quotes
```

## Usage:

```javascript
const AnimeQuote =require("anime-quotes");
const api = new AnimeQuote("YOUR TOKEN");

api.getQuote().then((res) => console.log(res));

// @return with this:
{
  id: 3747,
  quote: "I don't know everything. I just know what I know.",
  anime: 'Nisemonogatari',
  name: 'Tsubasa Hanekawa'
}
```

## Functions

| **Functions** | **Description**               |
| :-----------: | ----------------------------- |
|   getQuote    | Generate random anime quotes. |
