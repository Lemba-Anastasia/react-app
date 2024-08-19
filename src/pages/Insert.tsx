import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/bookModel';
import { v4 as uuidv4 } from 'uuid';
import { Button } from 'design-react-kit';
import { Alert } from 'design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

const Insert: React.FC = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBook = { id: uuidv4(), title, author, genre, description, coverImageUrl };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
        setDescription('');
    };

    return (
        <div>
            <h1>Insert a Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input  type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="genre">Genre:</label>
                    <input type="text" id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div>
                    <label htmlFor="coverImageUrl">Url:</label>
                    <input type="text" id="coverImageUrl" value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} required></input>
                </div>
                <Button size="sm" className="btn btn-outline-secondary">Add Book</Button>
            </form>
        </div>
    );
};

export default Insert;