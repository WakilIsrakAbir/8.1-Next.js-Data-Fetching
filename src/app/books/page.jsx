import BookCard from '@/components/BookCard';
import React from 'react';

// export const generateStaticParams = async() => {
//     const res = await fetch("http://localhost:4000/books");
//     const books = await res.json();
//     return books.slice(1,3).map(book => ({bookId: book.id}))
// }

const BooksPage = async() => {
    const res = await fetch("http://localhost:4000/books", {next: {revalidate: 10}});
    const books = await res.json();
    return (
        <div className='max-w-7xl mx-auto'>
            {/* <h2>Books Page: {books.length}</h2> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;