import React from 'react';
import styles from './Home.module.css';

const HomePage: React.FC = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeContent}>
                <h1>Welcome to the Book Management App!</h1>
                <p>Manage your book collection</p>
            </div>
        </div>
    );
};

export default HomePage;