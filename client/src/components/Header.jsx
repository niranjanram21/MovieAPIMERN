// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { logout } from '../utils/auth';

const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('movie'); // Default to movie search

    const handleLogout = async () => {
        alert("want to log out?")
        try {
            await logout();
            navigate('/'); // Navigate to LoginSignup page after logging out
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}&type=${searchType}`);
        }
    };

    return (
        <header className="body-font bg-black bg-opacity-60">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row md:gap-4 sm:gap-6 items-center">
                <Link to="/" className="inline-flex items-center text-xl font-extrabold md:text-3xl mx-4" aria-label="logo">
                    <span className="bg-gradient-to-r from-white  to-gray-300 bg-clip-text text-transparent  title2">Cine</span>
                    <span className="bg-gradient-to-r from-red-400  to-red-600 bg-clip-text text-transparent  title1">Search</span>
                </Link>
                <nav className=" md:mr-auto flex flex-wrap items-center text-base justify-center text-md font-bold">
                    <Link to="/" className="mr-5 bg-gradient-to-r from-gray-200  to-red-600 bg-clip-text text-transparent ">Home</Link>
                    <Link to="/tv" className="mr-5 bg-gradient-to-r from-gray-200  to-red-600 bg-clip-text text-transparent ">TV shows</Link>
                    <Link to="/movies" className="mr-5 bg-gradient-to-r from-gray-200  to-red-600 bg-clip-text text-transparent ">Movies</Link>
                    <Link to="/mylist" className="mr-5 bg-gradient-to-r from-gray-200  to-red-600 bg-clip-text text-transparent ">MyList</Link>
                </nav>

                <form onSubmit={handleSearchSubmit} className="w-80 flex my-0 items-center gap-2 border border-red-500 py-2 px-3">
                    <FaSearch className="text-red-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="focus:outline-none flex-grow bg-transparent text-gray-200"
                    />
                    <select
                        value={searchType}
                        onChange={handleSearchTypeChange}
                        className="focus:outline-none bg-white bg-opacity-70 text-black"
                    >
                        <option value="movie">Movies</option>
                        <option value="tv">TV Shows</option>
                        <option value="person">People</option>
                    </select>
                </form>
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
