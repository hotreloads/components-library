const PricingThree = (): JSX.Element => {
    return (
        <section id="pricing">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                        Designed for business teams like yours
                    </h2>
                    <p className="mb-5 font-light  sm:text-xl ">
                        Here at Flowbite we focus on markets where technology,
                        innovation, and capital can unlock long-term value and
                        drive economic growth.
                    </p>
                </div>
                <div
                    className="flex mb-12 justify-center items-center"
                    role="button">
                    <p className="mr-2 text-lg font-bold ">Bill Monthly</p>
                    <div className="cursor-pointer w-12 h-6 rounded-full bg-primary relative shadow-sm">
                        <input
                            defaultChecked
                            type="checkbox"
                            name="toggle"
                            id="toggle2"
                            className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
                        />
                        <label
                            htmlFor="toggle2"
                            className="toggle-label block w-12 h-6 overflow-hidden rounded-full  cursor-pointer"
                        />
                    </div>
                    <p className="ml-2 text-lg font-bold ">Bill Annually</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border shadow  xl:p-8 ">
                        <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                        <p className="font-light  sm:text-lg">
                            Best option for personal use & for your next
                            project.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                $29
                            </span>
                            <span>/month</span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Team size:
                                    <span className="font-semibold">
                                        1 developer
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Premium support:
                                    <span className="font-semibold">
                                        6 months
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Free updates:
                                    <span className="font-semibold">
                                        6 months
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            className=" btn btn-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            Get started
                        </a>
                    </div>

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border  shadow  xl:p-8 ">
                        <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                        <p className="font-light  sm:text-lg ">
                            Relevant for multiple users, extended & premium
                            support.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                $99
                            </span>
                            <span>/month</span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Team size:
                                    <span className="font-semibold">
                                        10 developers
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Premium support:
                                    <span className="font-semibold">
                                        24 months
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Free updates:
                                    <span className="font-semibold">
                                        24 months
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            className="font-medium rounded-lg text-sm px-5 py-2.5 text-center btn btn-primary">
                            Get started
                        </a>
                    </div>

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border shadow xl:p-8 ">
                        <h3 className="mb-4 text-2xl font-semibold">
                            Enterprise
                        </h3>
                        <p className="font-light  sm:text-lg ">
                            Best for large scale uses and extended
                            redistribution rights.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                $499
                            </span>
                            <span>/month</span>
                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Team size:
                                    <span className="font-semibold">
                                        100+ developers
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Premium support:
                                    <span className="font-semibold">
                                        36 months
                                    </span>
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span>
                                    Free updates:
                                    <span className="font-semibold">
                                        36 months
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            className="btn btn-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingThree;
