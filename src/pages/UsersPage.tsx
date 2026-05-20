import {useGetUsersQuery} from "../services/apiUsers.ts";
import MyHeader from "../common/MyHeader";

const UsersPage = () => {

    const {data: users} = useGetUsersQuery();
    console.log('Hello App', users);

    return (
        <>
            <div>
                <MyHeader text={"Список користувачів"} />
            </div>
            <div className={"mt-4"}>

            </div>

        </>
    )
}

export default UsersPage;