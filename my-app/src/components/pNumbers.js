import React, { useState, useEffect } from 'react';
import './pNumbers.css';

export const Pnumbers = ({ nbrPages, onPageChange, currentPage }) => {
    const [current, setCurrent] = useState(currentPage);

    useEffect(() => {
        setCurrent(currentPage);
    }, [currentPage]);

    const goLastPage = () => {
        onPageChange(nbrPages);
    };

    const goFirstPage = () => {
        onPageChange(1);
    };

    const setPage = (nbr) => {
        onPageChange(nbr);
    };

    const goBack = () => {
        onPageChange(current === 1 ? current : current - 1);
    };

    const goForward = () => {
        onPageChange(current === nbrPages ? current : current + 1);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="flex px-4 py-2 drop-shadow-lg">
                <i className="fa-solid fa-backward pagination-button" onClick={goFirstPage}></i>
                <i className="fa-solid fa-caret-left pagination-button" onClick={goBack}></i>
                <p className='w-2'></p>
                {[...Array(nbrPages)].map((_, index) => (
                    <p
                        key={index + 1}
                        className={`mx-1 px-2 cursor-pointer font-bold ${index + 1 === current ? 'activenbr' : ''}`}
                        onClick={() => setPage(index + 1)}
                    >
                        {index + 1}
                    </p>
                ))}
                <p className='w-2'></p>
                <i className="fa-solid fa-caret-right pagination-button" onClick={goForward}></i>
                <i className="fa-solid fa-forward pagination-button" onClick={goLastPage}></i>
            </div>
        </div>
    );
};
