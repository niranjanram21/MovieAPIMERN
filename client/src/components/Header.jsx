// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { logout } from '../utils/auth';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        alert("want to log out?")
        try {
            await logout();
            navigate('/'); // Navigate to LoginSignup page after logging out
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    return (
        <header className="text-white body-font bg-black bg-opacity-50">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:gap-4 sm:gap-6 items-center">
                <Link to="/" className="inline-flex items-center text-xl font-extrabold md:text-3xl mx-4" aria-label="logo">
                    <span className="text-gray-50 title2">Cine</span>
                    <span className="text-red-500 title1">Search</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-md font-bold">
                    <Link to="/" className="mr-5 hover:text-red-500">Home</Link>
                    <Link to="/tv" className="mr-5 hover:text-red-500">TV shows</Link>
                    <Link to="/movies" className="mr-5 hover:text-red-500">Movies</Link>
                    <Link to="/mylist" className="mr-5 hover:text-red-500">MyList</Link>
                </nav>

                <div className="w-64 flex my-0 items-center gap-2 border border-red-500 py-2 px-3">
                    <FaSearch className="text-red-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="focus:outline-none flex-grow bg-transparent"
                    />
                </div>
                <button
                    onClick={handleLogout}
                    className="inline-flex items-center text-red-500 border-0 py-1 font-bold px-3 text-base mt-4 md:mt-0"
                >
                    Log out
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
            <hr className="border-t border-red-400 border-opacity-25 mx-4" />
        </header>
    );
};

export default Header;
