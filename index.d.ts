interface AnimeQuote {
  _id: number;
  quote: string;
  anime: string;
  name: string;
}

export function getFact(): Promise<AnimeQuote>;
