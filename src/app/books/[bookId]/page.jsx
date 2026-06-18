import React from 'react';

const BookDetailsPage = async({params}) => {
    
    const {bookId} = await params;
    // console.log(bookId);

    const res = await fetch(`http://localhost:4000/books/${bookId}`);
    const { title, author, description, price } = await res.json();


    return (
        <div className="mt-20">
            {/* <h2>Book Details Page for Book ID: {bookId}</h2> */}
            <div className="bg-slate-800 w-100 mx-auto p-5 space-y-3 rounded-md shadow-md">
                <h2 className='text-2xl font-bold'>Title: {title}</h2>
                <p>Author: {author}</p>
                <p>Description: {description}</p>
                <p className='text-green-500 text-xl'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default BookDetailsPage;