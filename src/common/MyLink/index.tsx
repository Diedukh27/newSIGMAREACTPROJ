
import {Link} from "react-router-dom";

interface MyLinkProps {
    text: string;
    to: string;
}

const MyLink: React.FC<MyLinkProps> = ({text, to}) => {
    return (
        <>
            <Link className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                  to={to}>
                {text}
            </Link>
        </>
    );
}

export default MyLink;