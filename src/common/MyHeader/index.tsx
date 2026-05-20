interface MyHeaderProps {
    text: string
}

const MyHeader: React.FC<MyHeaderProps> = ({text}) => {
    return (
        <>
            <h1 className={"text-gray-900 dark:text-white text-4xl font-bold text-center"}>
                {text}
            </h1>
        </>
    );
}

export default MyHeader;