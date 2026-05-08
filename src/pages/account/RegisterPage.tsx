import MyHeader from "../../common/MyHeader";
import MyButton from "../../common/MyButton";
import MyInput from "../../common/MyInput";
import {useFormik} from "formik";
import MyInputPassword from "../../common/MyInputPassword";
import MyInputImage from "../../common/MyInputImage";
import type {IRegister} from "../../types/account/IRegister.ts";
import {useRegisterMutation} from "../../services/apiAccount.ts";
import {useNavigate} from "react-router-dom";
import MyLink from "../../common/MyLink";

const RegisterPage = () => {

    const [registerUser] =  useRegisterMutation(); //реєстрація користувача
    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації
    const initValues: IRegister = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        imageFile: null
    }
    const navigate = useNavigate();
    const submitHandler = async (values: IRegister) => {
        try {
            console.log("Submit value: ",values);
            const result = await registerUser(values).unwrap();
            console.log("Результат Реєстрації",result);
            navigate("/login");
            // console.log("Відправка запиту на сервер", result);
        }
        catch(error: any) {
            alert(error.data.errors);
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
    const {handleSubmit, handleChange, setFieldValue} = formik;

    const onHandleImageSelect = (file: File | null, name: string) => {
        console.log("Select image handle", file, name);
        setFieldValue(name, file); //Зберігаємо фото у середину форміка
    }

    return (
        <>
            <div className="max-w-2xl mx-auto p-8">
                <MyHeader text={"Реєстрація"}/>
                <form onSubmit={handleSubmit}>
                    <MyInput label={"Прізвище"}
                             placeholder={"Вкажіть прізвище"}
                             id={"lastName"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Ім'я"}
                             placeholder={"Вкажіть ім'я"}
                             id={"firstName"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Email"}
                             placeholder={"Вкажіть пошту"}
                             id={"email"}
                             onChange={handleChange}
                    />

                    <MyInputPassword label={"Пароль"}
                                     placeholder={"Вкажіть пароль"}
                                     id={"password"}
                                     onChange={handleChange}
                    />

                    <MyInputImage label={"Фото користувача"}
                                  placeholder={"Оберіть фото"}
                                  id={"imageFile"}
                                  onChange={onHandleImageSelect}
                                  objectFit = {"cover"}
                                  previewHeight = {"h-96"}
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


                    <MyButton text={"Реєстація"}/>
                    <MyLink text={"Вхід"} to={"/login"} />
                </form>
            </div>
        </>
    )
}

export default RegisterPage;