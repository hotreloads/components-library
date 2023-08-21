import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { type z } from "zod";

const RegistrationOne = ({
    authMethod,
    formSchema
}: {
    authMethod: string;
    formSchema: any;
}): JSX.Element => {
    const isLogin = authMethod === "login";
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    type formType = z.infer<typeof formSchema>;

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    });

    const handleFormSubmission = (formData: formType): void => {
        route();
        reset();
    };

    return (
        <section className="flex flex-col justify-center items-center">
            <Link href="/">
                <img
                    className="mt-20"
                    height={42}
                    width={201}
                    src="https://images.ctfassets.net/rz1oowkt5gyp/13zrkgNeK4xNziAQIfM3BT/44c6750e80104e3a38a61881c21a0923/trello-logo-blue.svg"
                />
            </Link>
            <div className="p-2 lg:p-9 w-full lg:w-4/12 md:flex items-center justify-center mt-6 lg:mt-10">
                <div className="shadow-lg border rounded  w-full p-10">
                    <form onSubmit={handleSubmit(handleFormSubmission)}>
                        <p
                            tabIndex={0}
                            className="focus:outline-none text-2xl font-extrabold leading-6 ">
                            {isLogin
                                ? "Login to your account"
                                : "Create your account"}
                        </p>
                        <p
                            tabIndex={0}
                            className="focus:outline-none text-sm mt-4 font-medium leading-none ">
                            {isLogin
                                ? "Don't have account?"
                                : "Need an account?"}
                            <Link
                                href={isLogin ? "/register" : "login"}
                                className="focus:outline-none focus:underline hover:underline text-sm font-medium leading-none text-blue-500 ml-1 cursor-pointer">
                                {isLogin ? "Sign up here" : "Create one here"}
                            </Link>
                        </p>
                        <button
                            aria-label="Continue with google"
                            role="button"
                            className=" p-3 border rounded-lg flex justify-center items-center w-full mt-10 hover:bg-gray-100">
                            <svg
                                width={19}
                                height={20}
                                viewBox="0 0 19 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                                    fill="#EB4335"
                                />
                            </svg>
                            <p className="text-base font-medium ml-4 ">
                                {isLogin ? "Continue " : "Register "} with
                                Google
                            </p>
                        </button>

                        <div className="w-full flex items-center justify-between py-5">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-2.5 ">
                                OR
                            </p>
                            <hr className="w-full bg-gray-400" />
                        </div>
                        {!isLogin ? (
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium leading-none ">
                                    Name
                                </label>
                                <input
                                    {...register("name")}
                                    id="name"
                                    type="text"
                                    autoFocus={!isLogin}
                                    className=" border rounded text-xs font-medium leading-none  py-3 w-full pl-3 mt-2"
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.name.message as any}
                                    </p>
                                )}
                            </div>
                        ) : null}
                        <div className={`${!isLogin ? "pt-5" : "pt-0"}`}>
                            <label
                                htmlFor="email"
                                className="text-sm font-medium leading-none ">
                                Email
                            </label>
                            <input
                                {...register("email")}
                                id="email"
                                type="email"
                                autoFocus={isLogin}
                                className=" border rounded text-xs font-medium leading-none  py-3 w-full pl-3 mt-2"
                                placeholder="e.g: john@gmail.com "
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.email.message as any}
                                </p>
                            )}
                        </div>
                        <div className="mt-6 w-full">
                            <label
                                htmlFor="myInput"
                                className="text-sm font-medium leading-none ">
                                Password
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input
                                    {...register("password")}
                                    id="myInput"
                                    placeholder="*********"
                                    className="border rounded text-xs font-medium leading-none  py-3 w-full pl-3 mt-2"
                                    type={showPassword ? "text" : "password"}
                                />

                                <div className="absolute text-gray-500 right-0 mt-2 mr-3 cursor-pointer">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}>
                                        {showPassword ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </button>
                                </div>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password.message as any}
                                </p>
                            )}
                        </div>
                        {isLogin ? (
                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route("password.request")}
                                    className="text-sm hover:underline hover:text-blue-500 ">
                                    Forgot password?
                                </Link>
                            </div>
                        ) : null}
                        {!isLogin ? (
                            <div className="mt-6 w-full">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-sm font-medium leading-none ">
                                    Confirm Password
                                </label>
                                <div className="relative flex items-center justify-center">
                                    <input
                                        {...register("confirmPassword")}
                                        id="confirmPassword"
                                        placeholder="*********"
                                        className="border rounded text-xs font-medium leading-none  py-3 w-full pl-3 mt-2"
                                        type={showConfirm ? "text" : "password"}
                                    />

                                    <div className="absolute text-gray-500 right-0 mt-2 mr-3 cursor-pointer">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowConfirm(!showConfirm);
                                            }}>
                                            {showConfirm ? (
                                                <FaEyeSlash />
                                            ) : (
                                                <FaEye />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                {errors.confirm && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.confirm.message as any}
                                    </p>
                                )}
                            </div>
                        ) : null}

                        <button
                            type="submit"
                            className="text-sm mt-8 font-semibold btn btn-primary w-full rounded ">
                            {isLogin ? "Log in" : "Create my account"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RegistrationOne;
