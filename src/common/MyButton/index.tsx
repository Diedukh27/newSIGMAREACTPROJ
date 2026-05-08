interface MyButtonProps {
    text: string;
}

const MyButton: React.FC<MyButtonProps> = ({text}) => {
    return (
        <>
            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>
                {text}
            </button>
        </>
    );
}

export default MyButton;
