import MyHeader from "../../common/MyHeader";
import {useCreateMovieMutation} from "../../services/apiMovies.ts";
import type {IMovieCreate} from "../../types/movies/IMovieCreate.ts";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import MyInput from "../../common/MyInput";
import MyDescription from "../../common/MyDescription";
import MyInputImage from "../../common/MyInputImage";
import MyButton from "../../common/MyButton";
import {useSearchGenresQuery} from "../../services/apiGenres.ts";

const CreateMoviePage = () => {

    const {data: genres} = useSearchGenresQuery({page: 1, itemPrePage: 1000});
    console.log("genres", genres);

    const [createMovie] =  useCreateMovieMutation(); //реєстрація користувача
    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації
    const initValues: IMovieCreate = {
        title: "",
        slug: "",
        genreIds: [],
        description: "",
        image: null,
        video: null,
        imdbRating: "",
        releaseDate: "",
        trailerUrl: ""
    }
    const navigate = useNavigate();
    const submitHandler = async (values: IMovieCreate) => {
        try {
            console.log("Submit value: ",values);
            // const result = await createMovie(values).unwrap();
            // console.log("Результат реєстрації", result);
            // navigate("/login");
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
                <MyHeader text={"Створити фільм"}/>
                <form onSubmit={handleSubmit}>
                    <MyInput label={"Назва фільму"}
                             placeholder={"Вкажіть назву"}
                             id={"title"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Slug"}
                             placeholder={"Вкажіть slug"}
                             id={"slug"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Жанр"}
                             placeholder={"Вкажіть жанр"}
                             id={"genreIds"}
                             onChange={handleChange}
                    />

                    <MyDescription label={"Опис"}
                                   placeholder={"Вкажіть опис"}
                                   id={"description"}
                                   onChange={handleChange}
                    />

                    <MyInputImage label={"Фото фільму"}
                                  placeholder={"Вкажіть фото"}
                                  id={"image"}
                                  objectFit = {"cover"}
                                  previewHeight = {"h-96"}
                                  onChange={onHandleImageSelect}
                    />

                    <MyInputImage label={"Фільм"}
                                  placeholder={"Вкажіть відео"}
                                  id={"video"}
                                  objectFit = {"cover"}
                                  previewHeight = {"h-96"}
                                  onChange={onHandleImageSelect}
                    />

                    <MyInput label={"Рейтинг фільму"}
                             placeholder={"Вкажіть рейтинг"}
                             id={"imdbRating"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Дата релізу"}
                             placeholder={"Вкажіть дату релізу"}
                             id={"releaseDate"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Трейлер"}
                             placeholder={"Вкажіть помилання на трейлер"}
                             id={"trailerUrl"}
                             onChange={handleChange}
                    />
                    <MyButton text={"Створити фільм"}/>
                </form>
            </div>
        </>
    );
}

export default CreateMoviePage;