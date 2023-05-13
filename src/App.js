import logo from './logo.svg';
import Book from './components/Book'
import './App.css';

let books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    des: "A classic novel exploring racial injustice and moral courage through the eyes of a young girl in the 1930s South.",
    src: "https://source.unsplash.com/600x400/?to-kill-a-mockingbird",
    rating: 4.5
  },
  {
    title: "1984",
    author: "George Orwell",
    des: "A dystopian novel set in a totalitarian society where the government constantly monitors and manipulates its citizens.",
    src: "https://source.unsplash.com/600x400/?1984",
    rating: 4.2
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    des: "A classic novel set in the roaring twenties and exploring themes of wealth, love, and the American Dream.",
    src: "https://source.unsplash.com/600x400/?the-great-gatsby",
    rating: 4.3
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    des: "A coming-of-age novel following the experiences of a teenage boy in New York City after he is expelled from prep school.",
    src: "https://source.unsplash.com/600x400/?the-catcher-in-the-rye",
    rating: 4.0
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    des: "A classic romantic novel set in 19th century England, exploring themes of class, gender, and social expectations.",
    src: "https://source.unsplash.com/600x400/?pride-and-prejudice",
    rating: 4.6
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    des: "An epic fantasy trilogy set in Middle-earth, following the quest of a hobbit to destroy a powerful ring and defeat an evil lord.",
    src: "https://source.unsplash.com/600x400/?the-lord-of-the-rings",
    rating: 4.8
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    des: "A dystopian young adult novel set in a post-apocalyptic world, where teenagers are forced to compete in a televised battle to the death.",
    src: "https://source.unsplash.com/600x400/?the-hunger-games",
    rating: 4.2
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    des: "A Gothic novel exploring the dangers of beauty, hedonism, and aestheticism through the story of a young man who sells his soul for eternal youth.",
    src: "https://source.unsplash.com/600x400/?the-picture-of-dorian-gray",
    rating: 4.4
  }
]


function App() {
  return (
    <div>
      <h1 className='main-heading'>Pick a book to read</h1>
      <div className="App">
      {books.map((book)=>{
        return <Book title= {book.title} author={book.author} des= {book.des} rating= {book.rating} src={book.src} />
      })}
    </div>
    </div>
  );
}

export default App;
