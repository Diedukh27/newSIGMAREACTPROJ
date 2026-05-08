import {useGetUsersQuery} from "../services/apiUsers.ts";
import MyHeader from "../common/MyHeader";
import MyLink from "../common/MyLink";

const UsersPage = () => {

    const {data: users} = useGetUsersQuery();
    console.log('Hello App', users);

    return (
        <>
            <div>
                <MyHeader text={"Список користувачів"} />
            </div>
            <div className={"mt-4"}>
                <MyLink text={"Перейти до створення"} to={"/posts/create"} />
                <MyLink text={"Реєстрація"} to={"/register"} />
                <MyLink text={"Вхід"} to={"/login"} />
            </div>

        </>
    )
}

export default UsersPage;