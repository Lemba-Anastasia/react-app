import styled from 'styled-components';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';

export const CatalogueContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    background-color: #f5f5f5;
`;


export const BookCard = styled.div`
    background: white;
    border: 1px solid #ccc;
    margin: 10px;
    padding: 20px;
    width: 400px;
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 1.5em;
        margin-bottom: 10px;
        white-space: nowrap; 
    }

    p {
        margin: 10px 0;
        white-space: nowrap; 
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 30px;
        margin-bottom: 10px;
    }
`;

export const Button = styled.button`
    background-color: #ff4d4d;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 1em;
    margin-top: 10px;
    padding: 10px 20px;

    &:hover {
        background-color: #ff0000;
    }
`;
