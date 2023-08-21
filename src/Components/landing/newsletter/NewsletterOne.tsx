const NewsletterOne = () => {
    return (
        <section className="p-6 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
            <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <img
                    src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png"
                    alt="Envelope with a newsletter"
                    role="img"
                    className="h-full xl:w-full lg:w-1/2 w-full "
                />
            </div>
            <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10  mb-4 text-center xl:text-left md:mt-0 mt-4">
                    Subscribe
                </h1>
                <p className="text-base leading-normal  text-center xl:text-left">
                    Whether article spirits new her covered hastily sitting her.
                    Money witty books nor son add.
                </p>
                <div className="flex items-stretch mt-12">
                    <input
                        className="bg-gray-100 text-black rounded-lg rounded-r-none leading-none  p-5 w-4/5 focus:outline-none "
                        type="email"
                        placeholder="Your Email"
                    />
                    <button className="w-32 rounded-l-none hover:bg-primary-focus bg-primary rounded font-medium leading-none p-5 uppercase focus:outline-none ">
                        subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterOne;
