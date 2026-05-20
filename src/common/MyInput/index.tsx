interface MyInputProps {
    label: string;
    placeholder: string;
    id: string;
    onChange: (value: string) => void;
}

const MyInput: React.FC<MyInputProps> = ({label, placeholder, id, onChange}) => {
    return (
        <>
            <div className="mb-6">
                <label htmlFor={id}
                       className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {label}
                </label>
                <input
                    type="text"
                    id={id}
                    name={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="w-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
            </div>
        </>
    );
}

export default MyInput;