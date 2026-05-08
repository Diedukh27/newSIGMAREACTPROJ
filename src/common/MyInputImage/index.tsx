import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface MyInputImageProps {
    label: string;
    placeholder: string;
    id: string;
    onChange: (file: File | null, name: string) => void;
    acceptedFormats?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
    previewHeight?: string;
}

const MyInputImage: React.FC<MyInputImageProps> = ({
                                                       label,
                                                       placeholder,
                                                       id,
                                                       onChange,
                                                       acceptedFormats = 'image/jpeg,image/png,image/gif,image/webp',
                                                       objectFit = 'cover',
                                                       previewHeight = 'h-64'
                                                   }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('');
    const [isDragActive, setIsDragActive] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        //console.log("select file", e.target.name);
        if (file) {
            processFile(file, e.target.name);
        }
    };

    const processFile = (file: File, inputName: string) => {
        // Validate file type
        if (!acceptedFormats.includes(file.type)) {
            alert('Будь ласка, виберіть зображення у форматі JPG, PNG, GIF або WebP');
            return;
        }

        setSelectedFile(file);
        setFileName(file.name);

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = e.target?.result as string;
            setPreviewUrl(preview);
            onChange(file, inputName); //повідомлення через callBack
        };
        reader.readAsDataURL(file);
    };

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);

        const file = e.dataTransfer.files?.[0];
        if (file) {
            processFile(file);
        }
    };

    const handleClear = () => {
        setPreviewUrl(null);
        setSelectedFile(null);
        setFileName('');
        onChange(null, null);
    };

    return (
        <div className="mb-6">
            <label
                htmlFor={id}
                className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3"
            >
                {label}
            </label>

            {!previewUrl ? (
                <div
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 ${
                        isDragActive
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-900 hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                >
                    <input
                        type="file"
                        id={id}
                        name={id}
                        accept={acceptedFormats}
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                    />

                    <div className="flex flex-col items-center justify-center py-8">
                        <ImageIcon
                            size={40}
                            className="text-gray-400 dark:text-gray-500 mb-3"
                        />
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                            {placeholder}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            або перетягніть файл сюди
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                            JPG, PNG, GIF, WebP до 10MB
                        </p>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-slate-800">
                        <img
                            src={previewUrl}
                            alt="Превью"
                            className={`w-full ${previewHeight} object-${objectFit}`}
                        />
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors duration-200 shadow-lg"
                            aria-label="Видалити фото"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-gray-600 rounded-lg p-3">
                        <div className="flex items-center gap-2 flex-1">
                            <Upload size={18} className="text-blue-500 dark:text-blue-400" />
                            <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                                {fileName}
                            </span>
                        </div>
                        <label
                            htmlFor={`${id}-new`}
                            className="ml-2 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-colors duration-200"
                        >
                            Змінити
                        </label>
                        <input
                            type="file"
                            id={`${id}-new`}
                            accept={acceptedFormats}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyInputImage;
