/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className=" bg-gradient-to-r from-black to-red-900 py-4">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
                        <div className="mb-3 text-center md:mb-0 md:text-left">
                            <span className="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
                            <p className="text-indigo-200">Subscribe to our newsletter</p>
                        </div>

                        <form className="flex w-full gap-2 md:max-w-md">
                            <input
                                placeholder="Email"
                                className="w-full flex-1 rounded border border-black bg-transparent px-3 py-2 text-white placeholder-indigo-100 outline-none ring-red-600 transition duration-100 focus:ring"
                            />

                            <button
                                type="submit"
                                className="inline-block rounded border border-black bg-transparent px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-black hover:bg-opacity-50 focus-visible:ring active:text-indigo-600 md:text-base"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="pt-12 lg:pt-16">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
                        <div className="col-span-full lg:col-span-2">
                            <div className="mb-4 lg:-mt-2">
                                <Link to="/" className=" text-xl font-extrabold md:text-3xl" aria-label="logo">
                                    <span className="text-gray-50 title2">Cine</span>
                                    <span className="text-red-500 title1">Search</span>
                                </Link>
                            </div>
                            <p className="mb-6 text-gray-400 sm:pr-8">
                                Filler text is dummy text which has no meaning however looks very similar to real text
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition duration-100 hover:text-gray-400 active:text-gray-600"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition duration-100 hover:text-gray-400 active:text-gray-600"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition duration-100 hover:text-gray-400 active:text-gray-600"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-10 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm12.5 11.268h-3v-5.604c0-3.408-4-3.148-4 0v5.604h-3v-10h3v1.378c1.396-2.586 7-2.777 7 2.476v6.146z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>
                            <nav className="flex flex-col gap-4">
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Overview</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Solutions</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Pricing</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Customers</span>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>
                            <nav className="flex flex-col gap-4">
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">About</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Investor Relations</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Jobs</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Press</span>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>
                            <nav className="flex flex-col gap-4">
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Contact</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Documentation</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Chat</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">FAQ</span>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>
                            <nav className="flex flex-col gap-4">
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Terms of Service</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Privacy Policy</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Cookie Policy</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 transition duration-100 hover:text-red-500 active:text-red-600 hover:cursor-pointer">Data Protection</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="border-t pt-6">
                        <p className="text-center text-xs text-gray-400">&copy; 2024 - Present CineSearch. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
