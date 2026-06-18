import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    const { title, author, description, price, category } = book;
    return (
      <div className="card w-96 bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>
          <h2>{author}</h2>
          <p>{description}</p>
          <p> ${price} </p>
          <p> {category} </p>
          <div className="justify-end card-actions">
            <Link href={`/books/${book.id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BookCard;