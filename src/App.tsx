import './App.css'
// import APP_ENV from "./env";
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage.tsx";
import CreatePostPage from "./pages/CreatePostPage.tsx";
import RegisterPage from "./pages/account/RegisterPage.tsx";
import LoginPage from "./pages/account/LoginPage.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<UsersPage/>} />
                    <Route path={"posts"}>
                        <Route path={"create"} element={<CreatePostPage/>} />
                    </Route>
                    <Route path={"register"} element={<RegisterPage/>}/>
                    <Route path={"Login"} element={<LoginPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
