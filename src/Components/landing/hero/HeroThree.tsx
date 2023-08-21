const HeroThree = () => {
    return (
        <section
            className=" pb-12 overflow-y-hidden"
            style={{ minHeight: 700 }}>
            <div>
                <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                    <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center  font-black leading-7 md:leading-10">
                            The Freedom to Create the
                            <span className="text-primary">Websites</span>
                            You Want
                        </h1>
                        <p className="mt-5 sm:mt-10 lg:w-10/12  font-normal text-center text-sm sm:text-lg">
                            A professonal website drives sales. Create a
                            beautiful website to impress and engage new
                            customers and establish your business online
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className=" lg:text-xl lg:font-bold  rounded btn btn-primary text-sm">
                            Get Started
                        </button>
                        <button className="ml-4 lg:text-xl lg:font-bold text-sm btn btn-secondary btn-outline rounded">
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroThree;
