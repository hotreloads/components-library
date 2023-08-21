const PricingTwoAlt = (): JSX.Element => {
    return (
        <section id="pricing">
            <div className="container px-6 py-8 mx-auto">
                <div className="xl:items-center xl:-mx-8 xl:flex">
                    <div className="flex flex-col items-center xl:items-start xl:mx-8">
                        <h1 className="text-2xl font-medium  capitalize lg:text-3xl ">
                            Our Pricing Plan
                        </h1>

                        <div className="mt-4">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>

                        <p className="mt-4 font-medium  ">
                            You can get All Access by selecting your plan!
                        </p>
                    </div>

                    <div className="flex-1 xl:mx-8">
                        <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                            <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                                <div className="p-6">
                                    <h1 className="text-xl font-medium  capitalize lg:text-2xl ">
                                        Essential
                                    </h1>

                                    <p className="mt-4  ">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Nostrum quam
                                        voluptatibus
                                    </p>

                                    <h2 className="mt-4 text-2xl font-semibold  sm:text-3xl ">
                                        $3.00
                                        <span className="text-base font-medium">
                                            /Month
                                        </span>
                                    </h2>

                                    <p className="mt-1  ">Yearly payment</p>

                                    <button className="w-full px-4 py-2 mt-6 tracking-wide  capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-white">
                                        Start Now
                                    </button>
                                </div>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <div className="p-6">
                                    <h1 className="text-lg font-medium  capitalize lg:text-xl ">
                                        What’s included:
                                    </h1>

                                    <div className="mt-8 space-y-4">
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                All limited links
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Own analytics platform
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Chat support
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Optimize hashtags
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-red-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Mobile app
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-red-400"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Unlimited users
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                                <div className="p-6">
                                    <h1 className="text-xl font-medium  capitalize lg:text-2xl dark:text-white">
                                        Premium
                                    </h1>

                                    <p className="mt-4  ">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Nostrum quam
                                        voluptatibus
                                    </p>

                                    <h2 className="mt-4 text-2xl font-semibold  sm:text-3xl ">
                                        $50.00
                                        <span className="text-base font-medium">
                                            /life time
                                        </span>
                                    </h2>

                                    <p className="mt-1  ">One time payment</p>

                                    <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                        Start Now
                                    </button>
                                </div>

                                <hr className="border-gray-200 dark:border-gray-700" />

                                <div className="p-6">
                                    <h1 className="text-lg font-medium  capitalize lg:text-xl dark:text-white">
                                        What’s included:
                                    </h1>

                                    <div className="mt-8 space-y-4">
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                All limited links
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Own analytics platform
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Chat support
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Optimize hashtags
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Mobile app
                                            </span>
                                        </div>

                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 text-blue-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>

                                            <span className="mx-4  ">
                                                Unlimited users
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingTwoAlt;
