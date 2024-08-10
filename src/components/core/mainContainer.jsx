import React from 'react';
import Navbar from '../navbar';

const MainContainer = ({ children, currentPage }) => {
    return (
        <div className="bg-custom  h-full justify-center flex pt-10">
            <div className='lg:m-12 sm:m-8 w-screen h-full bg-zinc-50 overflow-x-hidden space-y-12 font-poppins'>
                <Navbar currentPage={currentPage} />
                { children } 
            </div>
        </div>
    );
};

export default MainContainer;