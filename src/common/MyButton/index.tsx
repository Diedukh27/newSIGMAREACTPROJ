interface MyButtonProps {
    text: string;
}

const MyButton: React.FC<MyButtonProps> = ({text}) => {
    return (
        <>
            <button className={"bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"}>
                {text}
            </button>
        </>
    );
}

export default MyButton;