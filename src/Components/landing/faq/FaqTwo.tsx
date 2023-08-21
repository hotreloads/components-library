import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqTwo = (): JSX.Element => {
    return (
        <section>
            <div className="container max-w-4xl px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center lg:text-3xl ">
                    Frequently asked questions
                </h1>

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
        </section>
    );
};

export default FaqTwo;

const AccordionItem = ({
    header,
    text
}: {
    header: string;
    text: string;
}): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-lg ">
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="flex items-center justify-between w-full p-8">
                <h1 className="font-semibold">{header}</h1>

                {isOpen ? <FaMinus /> : <FaPlus />}
            </button>

            <hr className={`${isOpen ? "border" : "border-0"} `} />

            <p className={`${isOpen ? "block" : "hidden"} p-8 text-sm`}>
                {text}
            </p>
        </div>
    );
};
