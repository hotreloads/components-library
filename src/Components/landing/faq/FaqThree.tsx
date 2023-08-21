import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqThree = (): JSX.Element => {
    return (
        <section>
            <div className="container px-6 py-10 mx-auto max-w-4xl">
                <h1 className="text-2xl font-semibold lg:text-3xl ">
                    Frequently Asked Questions
                </h1>

                <hr className="my-6 border" />

                <div>
                    <div className="mt-12 space-y-8">
                        <AccordionItem
                            header="How i can play for my appoinment ?"
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab
                maxime cum laboriosam recusandae facere dolorum veniam quia
                pariatur obcaecati illo ducimus?"
                        />
                        <AccordionItem
                            header="Is the cost of the appoinment covered by private
                                health insurance?"
                            text="Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptas eaque nobis, fugit odit omnis fugiat
                            deleniti animi ab maxime cum laboriosam recusandae
                            facere dolorum veniam quia pariatur obcaecati illo
                            ducimus?"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqThree;

const AccordionItem = ({
    header,
    text
}: {
    header: string;
    text: string;
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="flex items-center focus:outline-none">
                {isOpen ? <FaMinus /> : <FaPlus />}

                <h1 className="mx-4 text-xl">
                    How can I pay for my appointment ?
                </h1>
            </button>

            <div
                className={`${isOpen ? "block" : "hidden"} flex mt-8 md:mx-10`}>
                <span className="border"></span>

                <p className="max-w-3xl px-4  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, eum quae. Harum officiis reprehenderit ex quia
                    ducimus minima id provident molestias optio nam vel, quidem
                    iure voluptatem, repellat et ipsa.
                </p>
            </div>

            <hr className="my-8 border" />
        </>
    );
};
