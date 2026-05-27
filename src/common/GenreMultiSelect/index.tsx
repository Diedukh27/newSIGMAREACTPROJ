import React, { useState, useRef, useEffect } from 'react';

export interface IGenreItem {
    id: number;
    name: string;
    slug: string;
    image: string;
}

interface GenreMultiSelectProps {
    genres: IGenreItem[];
    selectedGenres: IGenreItem[];
    onChange: (genres: IGenreItem[]) => void;
    label?: string;
    placeholder?: string;
}

const GenreMultiSelect: React.FC<GenreMultiSelectProps> = ({
                                                               genres,
                                                               selectedGenres,
                                                               onChange,
                                                               label = "Жанри",
                                                               placeholder = "Виберіть жанри..."
                                                           }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    // Фільтруємо жанри за пошуком
    const filteredGenres = genres.filter(genre =>
        genre.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Закриваємо dropdown при кліку поза ним
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Обробка вибору жанру
    const handleSelectGenre = (genre: IGenreItem) => {
        const isSelected = selectedGenres.some(g => g.id === genre.id);

        if (isSelected) {
            onChange(selectedGenres.filter(g => g.id !== genre.id));
        } else {
            onChange([...selectedGenres, genre]);
        }
    };

    // Видалення жанру з вибраних
    const handleRemoveGenre = (genreId: number) => {
        onChange(selectedGenres.filter(g => g.id !== genreId));
    };

    const isGenreSelected = (genreId: number) => {
        return selectedGenres.some(g => g.id === genreId);
    };

    return (
        <div ref={containerRef} className="mb-6">
            {label && (
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {label}
                </label>
            )}

            {/* Вибрані жанри */}
            <div className="mb-3">
                <div className="flex flex-wrap gap-2">
                    {selectedGenres.length === 0 ? (
                        <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                            Не вибрано жанрів
                        </span>
                    ) : (
                        selectedGenres.map(genre => (
                            <div
                                key={genre.id}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                            >
                                <span>{genre.name}</span>
                                <button
                                    onClick={() => handleRemoveGenre(genre.id)}
                                    className="ml-1 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100 font-semibold"
                                    aria-label={`Видалити ${genre.name}`}
                                >
                                    ✕
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Поле пошуку та dropdown */}
            <div className="relative">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setIsOpen(true);
                        }}
                        className="w-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                    />
                </div>

                {/* Dropdown меню */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                        {filteredGenres.length === 0 ? (
                            <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                                Жанри не знайдені
                            </div>
                        ) : (
                            filteredGenres.map(genre => (
                                <div
                                    key={genre.id}
                                    onClick={() => handleSelectGenre(genre)}
                                    className={`px-4 py-2 cursor-pointer transition-colors ${
                                        isGenreSelected(genre.id)
                                            ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            checked={isGenreSelected(genre.id)}
                                            onChange={() => {}}
                                            className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 cursor-pointer"
                                        />
                                        <span className="flex-1">{genre.name}</span>
                                        {isGenreSelected(genre.id) && (
                                            <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                                ✓
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GenreMultiSelect;