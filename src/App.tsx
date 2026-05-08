import './App.css'
// import APP_ENV from "./env";
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage.tsx";
import CreatePostPage from "./pages/CreatePostPage.tsx";
import RegisterPage from "./pages/account/RegisterPage.tsx";
import LoginPage from "./pages/account/LoginPage.tsx";
import ForgotPasswordPage from "./pages/account/ForgotPasswordPage.tsx";
import ForgotPasswordSuccessPage from "./pages/account/ForgotPasswordSuccessPage.tsx";

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
                    <Route path={"forgot-password"} element={<ForgotPasswordPage/>}/>
                    <Route path={"forgot-password-success"} element={<ForgotPasswordSuccessPage/>}/>
                    <Route path={"login"} element={<LoginPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App