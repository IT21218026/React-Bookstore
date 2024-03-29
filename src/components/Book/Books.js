import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Book from '../Book/Book';
import "../Book/Book.css"


const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
    try {
      const response = await axios.get(URL);
      return response.data; // Return the data
    } catch (error) {
      console.error('Error fetching data:', error);
      return { books: [] };
    }
  };
  

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
    fetchHandler().then(data=>setBooks(data.books))
       
    },[]);
    console.log(books);
    
  return (
    <div>
        <ul>
            {books && books.map((book,i)=>(
                <li className= "book" key={i}>
                    <Book book={book} />

                </li>
        
        ))}
        </ul>
    </div>

  )
}

export default Books