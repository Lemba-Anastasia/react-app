import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { deleteBook } from '../store/bookModel';

const Catalogue: React.FC = () => {
    const books = useSelector((state: RootState) => state.books.books);
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteBook(id));
    };

    return (
        <div>
            <h1>Catalogue</h1>
            {books.length > 0 ? (
                books.map(book => (
                    <div key={book.id} className="book-card">
                        <h2>{book.title}</h2>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Description:</strong> {book.description}</p>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </div>
                ))
            ) : (
                <p>No books available</p>
            )}
        </div>
    );
};

export default Catalogue;