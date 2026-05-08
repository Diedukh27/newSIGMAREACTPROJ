interface MyHeaderProps {
    text: string
}

const MyHeader: React.FC<MyHeaderProps> = ({text}) => {
    return (
        <>
            <h1 className={"text-black  dark:text-white text-4xl font-bold text-center"}>
                {text}
            </h1>
        </>
    );
}

export default MyHeader;