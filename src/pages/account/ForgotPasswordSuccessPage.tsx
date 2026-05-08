import MyHeader from "../../common/MyHeader";
import MyLink from "../../common/MyLink";

const ForgotPasswordSuccessPage = () => {

    return (
        <>
            <div className="max-w-2xl mx-auto p-8">
                <MyHeader text={"Перевірте вашу електронну пошту"}/>

                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded-lg p-8 mb-8">
                    <div className="text-center">
                        {/* Іконка успіху */}
                        <div className="mb-4 flex justify-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-green-600 dark:text-green-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Заголовок */}
                        <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-3">
                            Лист надіслано!
                        </h2>

                        {/* Основний текст */}
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            Ми надіслали лист для відновлення пароля на вашу електронну пошту.
                        </p>

                        {/* Інструкції */}
                        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-6 text-left border border-green-200 dark:border-green-800">
                            <p className="text-gray-700 dark:text-gray-300 mb-3 font-semibold">
                                Що робити далі:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                                <li>Перейдіть до вашої поштової скриньки</li>
                                <li>Знайдіть лист від нас (перевірте папку "Спам" якщо не знайшли)</li>
                                <li>Натисніть на посилання для відновлення пароля</li>
                                <li>Створіть новий пароль</li>
                            </ol>
                        </div>

                        {/* Повідомлення про термін дії */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                            Посилання для відновлення активне протягом 24 годин.
                        </p>
                    </div>
                </div>

                {/* Кнопки */}
                <div className="space-y-3">
                    <MyLink
                        text={"Перейти до входу"}
                        to={"/login"}
                    />
                    <MyLink
                        text={"Спробувати з іншою поштою"}
                        to={"/forgot-password"}
                    />
                </div>
            </div>
        </>
    );
};

export default ForgotPasswordSuccessPage;