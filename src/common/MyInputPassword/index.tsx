import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface MyInputProps {
    label: string;
    placeholder: string;
    id: string;
    onChange: (value: string) => void;
}

const MyInputPassword: React.FC<MyInputProps> = ({ label, placeholder, id, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-6">
            <label
                htmlFor={id}
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3"
            >
                {label}
            </label>

            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="w-full px-4 py-3 pr-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 shadow-sm dark:shadow-lg"
                />

                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none transition-colors duration-200"
                    aria-label={showPassword ? 'Приховати пароль' : 'Показати пароль'}
                    tabIndex={-1}
                >
                    {showPassword ? (
                        <EyeOff size={20} />
                    ) : (
                        <Eye size={20} />
                    )}
                </button>
            </div>
        </div>
    );
};

export default MyInputPassword;