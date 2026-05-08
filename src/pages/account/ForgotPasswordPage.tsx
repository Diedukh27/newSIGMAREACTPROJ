import MyHeader from "../../common/MyHeader";
import MyButton from "../../common/MyButton";
import MyInput from "../../common/MyInput";
import {useFormik} from "formik";
import {useForgotPasswordMutation} from "../../services/apiAccount.ts";
import type {IForgotPassword} from "../../types/account/IForgotPassword.ts";
import MyLink from "../../common/MyLink";
import {useNavigate} from "react-router-dom";

const ForgotPasswordPage = () => {

    const [forgotPassword] =  useForgotPasswordMutation(); //вхід користувача
    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації
    const initValues: IForgotPassword = {
        email: ""
    }

    const navigate = useNavigate();

    const submitHandler = async (values: IForgotPassword) => {
        try {
            console.log("Submit value: ",values);
            await forgotPassword(values).unwrap();
            navigate("/forgot-password-success");
        }
        catch(error) {
            alert("Даної пошти не знайдено");
            console.log("Сталася халепа, щось пішло не так", error)
        }
        // console.log(values);
    }

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler
    });
    //SetFieldValue - відповідає за значеня у форму - самого Formik
    //handleChange
    const {handleSubmit, handleChange} = formik;

    return (
        <>
            <div className="max-w-2xl mx-auto p-8">
                <MyHeader text={"Відновити пароль"}/>
                <form onSubmit={handleSubmit}>

                    <MyInput label={"Email"}
                             placeholder={"Вкажіть пошту"}
                             id={"email"}
                             onChange={handleChange}
                    />

                    {/*<div className="mb-8">*/}
                    {/*    <label htmlFor="username"*/}
                    {/*           className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">*/}
                    {/*        Username*/}
                    {/*    </label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        id="username"*/}
                    {/*        placeholder="johndoe"*/}
                    {/*        className="w-full px-4 py-2 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border-2 border-red-300 dark:border-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-colors"*/}
                    {/*    />*/}
                    {/*    <p className="mt-1 text-xs text-red-600 dark:text-red-400">Username вже зайнято</p>*/}
                    {/*</div>*/}


                    <MyButton text={"Відновити пароль"}/>
                    <MyLink text={"Перейти до входу"} to={"/login"} />
                </form>
            </div>
        </>
    )
}

export default ForgotPasswordPage;