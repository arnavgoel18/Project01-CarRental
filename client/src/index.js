import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

const books = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._SX329_BO1,204,203,200_.jpg",
      title: "The Last Thing He Told Me",
      author: "Laura Dave"
    },
    {
      img: "https://m.media-amazon.com/images/I/81TgUz+7JBS._AC_UY436_FMwebp_QL65_.jpg",
      title: "American Marxism",
      author: "Martin Lewin"
    },
    {
      img: "https://m.media-amazon.com/images/I/71D6m50AZOL._AC_UY436_FMwebp_QL65_.jpg",
      title: "How I Saved the World",
      author: "Martin Lando"
    }
];

function BookList(){
  return(
    <section className = "bookList">
      {
        books.map((book) => {
          return (
            <Book book = {book}></Book>
          );
        })
      }
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props.book;

  return (
    <article className='bookContainer'>
      <Image img={img}/>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
}

const Image = (props) => {
  const {img} = props;
  return (
    <div><img src = {img} alt='Salas'/></div>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'));