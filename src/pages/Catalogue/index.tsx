import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {deleteBook} from '../../store/bookModel';
import {CatalogueContainer, Button, BookCard} from './index.style';
///import {Card, Button} from 'design-react-kit';

const Index: React.FC = () => {
    const books = useSelector((state: RootState) => state.books.books);
    const dispatch = useDispatch();
    const [selectedGenre, setSelectedGenre] = useState<string>('');

    const handleDelete = (id: string) => {
        dispatch(deleteBook(id));
    };

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(e.target.value);
    };

    const filteredBooks = selectedGenre
        ? books.filter(book => book.genre === selectedGenre)
        : books;

    const genres = Array.from(new Set(books.map(book => book.genre)));
    return (
        <div className="container my-5">
            <div className="row mb-4">
                <div className="col">
                    <h1>Catalogue</h1>
                    <select className="form-select" value={selectedGenre} onChange={handleGenreChange}>
                        <option value="">All Genres</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row">
                {/*<CatalogueContainer>*/}
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <div key={book.id} className="col-md-4 mb-4">
                            <BookCard className="bootstrap-italia-class">{/*<Card>*/}
                                <img src={book.coverImageUrl} className="card-img-top" alt={`${book.title} cover`}/>
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text"><strong>Author:</strong> {book.author}</p>
                                    <p className="card-text"><strong>Genre:</strong> {book.genre}</p>
                                    <p className="card-text">{book.description}</p>
                                    <Button color="danger" onClick={() => handleDelete(book.id)}>Delete</Button>
                                </div>
                            </BookCard>
                        </div>
                    ))
                ) : (
                    <p>No books available</p>
                )}
                {/*</CatalogueContainer>*/}
            </div>
        </div>
    );
};

export default Index;
