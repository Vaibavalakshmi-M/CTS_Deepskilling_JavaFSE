import React from 'react';
import './App.css';
import { books, blogs, courses } from './data';

function App() {
  return (
    <div className="container">
      <div className="column mystyle1">
        <h1>Course Details</h1>
        {courses.map((course, index) => (
          <div key={index}>
            <h3>{course.name}</h3>
            <p>{course.date}</p>
          </div>
        ))}
      </div>

      <div className="column st2">
        <h1>Book Details</h1>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))}
      </div>

      <div className="column v1">
        <h1>Blog Details</h1>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.title}</h3>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
