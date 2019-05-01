export interface IBooks {
  title: string;
  description: string;
  pubDate: string;
  author: string;
}

const books: IBooks[] = [
  {
    title: "Still Me",
    description: "Discover the love story that captured 21 million hearts",
    author: "Jojo Moyes",
    pubDate: "2018-01-25"
  },
  {
    title: "Sense & Sensibility",
    description: "Sister, terrible father 1800s usually heir story",
    author: "Jane Austen",
    pubDate: "1802"
  },
  {
    title: "Angels & Demons",
    description: "Not the Da Vinchi Code",
    author: "Dan Brown",
    pubDate: "2004"
  },

  {
    title: "I should probably know one",
    description: "poor excuse for a english student",
    author: "Iaasac Asimov",
    pubDate: "noidea"
  }
];

export default books;
