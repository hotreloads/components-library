import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { type z } from "zod";

const RegistrationTwo = ({
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
        reset();
    };

    return (
        <section className="min-h-screen bg-gray-100  flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-20 shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 bg-white sm:p-12">
                    <div>
                        <Link href="/">
                            <img
                                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                                className="w-32 mx-auto"
                            />
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 border flex items-center justify-center ">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg
                                            className="w-4"
                                            viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4"
                                            />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853"
                                            />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04"
                                            />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335"
                                            />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        {isLogin ? "Sign In" : "Sign Up"} with
                                        Google
                                    </span>
                                </button>
                            </div>
                            <div className="my-12 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm  tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or {isLogin ? "sign in" : "sign up"} with
                                    e-mail
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <form
                                    onSubmit={handleSubmit(
                                        handleFormSubmission
                                    )}>
                                    {!isLogin ? (
                                        <div>
                                            <input
                                                {...register("name")}
                                                className="w-full px-8 py-4 rounded-lg font-medium border border-gray-200  text-sm "
                                                type="text"
                                                placeholder="Name"
                                                autoFocus={!isLogin}
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-500">
                                                    {errors.name.message as any}
                                                </p>
                                            )}
                                        </div>
                                    ) : null}
                                    <input
                                        {...register("email")}
                                        className={`w-full px-8 py-4 rounded-lg font-medium border border-gray-200  text-sm ${
                                            isLogin ? "mt-0" : "mt-5"
                                        }`}
                                        type="email"
                                        placeholder="Email"
                                        autoFocus={isLogin}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500">
                                            {errors.email.message as any}
                                        </p>
                                    )}
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            {...register("password")}
                                            className="w-full px-8 py-4 rounded-lg font-medium  border border-gray-200  text-sm  mt-5"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Password"
                                        />
                                        <div className="absolute text-gray-500 right-0 mt-6 mr-3 cursor-pointer">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setShowPassword(
                                                        !showPassword
                                                    );
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
                                        <div>
                                            <div className="relative flex items-center justify-center">
                                                <input
                                                    {...register(
                                                        "confirmPassword"
                                                    )}
                                                    className="w-full px-8 py-4 rounded-lg font-medium  border border-gray-200  text-sm  mt-5"
                                                    type={
                                                        showConfirm
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="Confirm Password"
                                                />
                                                <div className="absolute text-gray-500 right-0 mt-6 mr-3 cursor-pointer">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setShowConfirm(
                                                                !showConfirm
                                                            );
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
                                                    {
                                                        errors.confirm
                                                            .message as any
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    ) : null}
                                    <button
                                        type="submit"
                                        className="mt-8 font-semibold btn btn-primary  w-full rounded-lg">
                                        <span className="ml-3">
                                            {isLogin ? "Sign In" : "Sign Up"}
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm ">
                                {isLogin
                                    ? "Don't have an account? "
                                    : "Already have an account? "}
                                <Link
                                    href={isLogin ? "/register" : "login"}
                                    className="ml-1 hover:underline text-blue-500">
                                    {isLogin ? "Sign up" : "Sign in"}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                        <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationTwo;
