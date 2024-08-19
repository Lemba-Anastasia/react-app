import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Index from './pages/Catalogue/index';
import Insert from './pages/Insert';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import PageContainer from "./componets/PageContainer";

const App: React.FC = () => {
    return (
        <PageContainer>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalogue">Catalogue</Link></li>
                        <li><Link to="/insert">Insert</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/catalogue" element={<Index/>}/>
                    <Route path="/insert" element={<Insert/>}/>
                </Routes>
            </div>
        </PageContainer>
    );
};


export default App;
