import React from 'react';

const Page = ({pokePerPage, pokemons, page, current, setCurrentPage}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(pokemons / pokePerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        if(current === pageNumbers.length) return;
        return setCurrentPage(parseInt(current) + 1);
    };

    const prevPage = () => {
        if(current === 1) return;
        return setCurrentPage(parseInt(current) - 1);
    };

    return(
        <nav>
            <div>
                {pageNumbers.length !== 0 ? (
                    <button onClick={prevPage}>
                        ⬅️
                    </button>
                ) : null }

                {pageNumbers &&
                pageNumbers.map(num =>(
                    <button key={num} onClick={() => page(num)}>
                        <a>{num}</a>
                    </button>
                ))}

                {pageNumbers.length !== 0 ? (
                    <button onClick={nextPage}>
                        ➡️
                    </button>
                ) : null }
            </div>
        </nav>
    )
    
};

export default Page;
