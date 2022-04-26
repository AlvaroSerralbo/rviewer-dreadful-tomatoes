import { Footer } from '../components/footer';

import { Navbar } from '../components/navBar';
import { HomePage } from '../pages/homepage';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RenderedShows } from '../pages/renderedShows';
import { useState } from 'react';

export const Navigation = () => {


    const [showFilter, setShowFilter] = useState(false);


    return (
        <>
            <BrowserRouter>
                <Navbar 
                    showFilter={ showFilter }
                    setShowFilter={ setShowFilter }
                />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="movies" element={<RenderedShows props={{ showKind : 'movie', showFilter : showFilter }} />} />
                    <Route path="series" element={<RenderedShows props={{ showKind : 'series', showFilter : showFilter }} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
