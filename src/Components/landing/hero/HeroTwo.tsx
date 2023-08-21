const HeroTwo = () => {
    return (
        <section className="lg:px-6 xl:px-0">
            <div className="mx-auto container relative z-0 px-4 xl:px-0">
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                        <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black  text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
                            ONE WALLET TO RULE THEM ALL
                        </h1>
                        <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8  text-lg lg:text-2xl">
                            Do you want to control your expenses and be always
                            aware of how much money you have spent?
                        </h2>
                        <div className="w-full flex justify-center md:block">
                            <button className="hover:opacity-90 bg-primary py-3 px-10 lg:py-7 lg:px-20 rounded-full  text-sm md:text-lg f-f-p">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                        <img
                            className="md:absolute md:w-1/2 md:-ml-28"
                            src="https://cdn.tuk.dev/assets/components/111220/Hero4/Device - Macbook Pro.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroTwo;
