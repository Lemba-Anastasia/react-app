import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import InitBookState from 'mock-books.json';

interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    description?: string;
    coverImageUrl: string;
}

interface BookState {
    books: Book[];
}

const initialState: BookState = {
    books: InitBookState,
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        },
    },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;