import React, { useState } from 'react';
import {Link, Outlet, useLocation} from 'react-router-dom';

const Layout: React.FC = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string): boolean => {
        return location.pathname === path;
    };

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    //які маємо сторінки
    const navLinks = [
        { path: '/', label: 'Користувачі' },
        { path: '/posts/create', label: 'Створити пост' },
        { path: '/register', label: 'Реєстрація' },
        { path: '/login', label: 'Вхід' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Header/Navigation */}
            <header className="bg-gray-50 dark:bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link
                            to="/"
                            className="flex items-center gap-2"
                        >
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">A</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:inline">
                                My App
                            </span>
                        </Link>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive(link.path)
                                            ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {link.label}
                                    {isActive(link.path) && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500 rounded-t-full"></span>
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links - Mobile */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top-2 duration-200">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={handleNavClick}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors mb-2 ${
                                        isActive(link.path)
                                            ? 'text-blue-600 dark:text-blue-400 bg-gray-200 dark:bg-gray-700'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-200px)]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                Про нас
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Це чудовий додаток для управління користувачами та постами.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                Посилання
                            </h3>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Головна
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/posts/create" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        Новий пост
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                Контакти
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                email@example.com
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-center text-sm text-gray-500 dark:text-gray-500">
                            © 2024 My App. Всі права захищені.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;