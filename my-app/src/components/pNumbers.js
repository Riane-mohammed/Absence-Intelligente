import React, { useState } from 'react';
import './pNumbers.css';

export const Pnumbers = ({ nbrPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    let listePages = [];

    for (let i = 1; i <= nbrPages; i++) {
        listePages.push(i);
    };

    const goLastPage = () => {
        setCurrentPage(nbrPages)
    };

    const goFirstPage = () => {
        setCurrentPage(1);
    };

    const setPage = (nbr) => {
        setCurrentPage(nbr);
    };

    const goBack = () => {
        setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1);
    };

    const goForward = () => {
        setCurrentPage(currentPage === nbrPages ? currentPage : currentPage + 1);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="flex px-4 py-2 drop-shadow-lg">
                <i class="fa-solid fa-backward pagination-button" onClick={goFirstPage}></i>
                <i class="fa-solid fa-caret-left pagination-button" onClick={goBack}></i>
                <p className='w-2'></p>
                {listePages.map((nbr) => (
                    <p key={nbr} className={`mx-1 px-2 cursor-pointer font-bold ${nbr === currentPage ? 'activenbr' : ''}`} onClick={() => setPage(nbr)} >{nbr}</p>
                ))}
                <p className='w-2'></p>
                <i class="fa-solid fa-caret-right pagination-button" onClick={goForward}></i>
                <i class="fa-solid fa-forward pagination-button" onClick={goLastPage}></i>
            </div>
        </div>
    )
}
