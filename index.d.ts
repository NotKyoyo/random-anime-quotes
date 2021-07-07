interface AnimeQuote {
  _id: number;
  quote: string;
  anime: string;
  said: string;
}

export function getFact(): Promise<AnimeQuote>;
