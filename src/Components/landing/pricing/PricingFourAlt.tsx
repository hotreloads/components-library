const PricingFourAlt = (): JSX.Element => {
    return (
        <section id="pricing" className="py-10  sm:py-16 lg:py-24">
            <div className="max-w-xl mx-auto text-center pb-10">
                <h2 className="text-4xl font-bold  lg:text-5xl sm:text-5xl">
                    Pricing &amp; Plans
                </h2>
                <p className="mt-4 text-lg leading-relaxed ">
                    Amet minim mollit non deserunt ullam co est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                </p>
            </div>
            <table className="shadow-md rounded max-w-5xl m-auto ">
                <thead className="sticky block top-0">
                    <tr className="flex text-left ">
                        <th
                            scope="row"
                            className=" hidden sm:block w-1/4 p-4 border bg-base-200 border-r-0 rounded-tl "></th>
                        <th
                            scope="col"
                            className="w-1/3 sm:w-1/4 p-4 border bg-base-200 border-r-0  font-normal">
                            <h4 className="u-slab">Basic</h4>
                            <p className="text-sm hidden sm:block">
                                Private Q&A for teams
                            </p>
                        </th>
                        <th
                            scope="col"
                            className="w-1/3 sm:w-1/4 p-4 border bg-base-200 border-r-0  font-normal">
                            <h4 className="u-slab">Business</h4>
                            <p className="text-sm hidden sm:block">
                                Private Q&A with secure single sign-on and
                                premium features for your whole organization
                            </p>
                        </th>
                        <th
                            scope="col"
                            className="w-1/3 sm:w-1/4 p-4 border bg-base-200 rounded-tr  font-normal">
                            <h4 className="u-slab">Enterprise</h4>
                            <p className="text-sm hidden sm:block">
                                Your own standalone Q&A community, with enhanced
                                security and flexible hosting options
                            </p>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="flex text-left">
                        <th
                            scope="row"
                            className="w-1/4 p-4 border border-r-0 border-t-0  hidden sm:block"></th>
                        <th
                            scope="col"
                            className="w-1/3 sm:w-1/4 p-4 border border-r-0 border-t-0  flex flex-col">
                            <div className="flex items-center mb-4 flex-wrap sm:no-wrap justify-center sm:justify-start">
                                <p className="u-slab text-3xl">$5</p>
                                <div className="font-normal text-xs ml-2">
                                    <p>Per user/ month</p>
                                    <p>billed anually</p>
                                </div>
                            </div>
                            <ul className="text-sm font-normal mb-6 hidden sm:block pl-8">
                                <li className="mb-2 tick">Free 14 day trial</li>
                                <li className="mb-2 tick">
                                    A single team hosted on stackoverflow.com
                                </li>
                                <li className="mb-2 tick">
                                    Unlimited private questions and answers
                                </li>
                                <li className="tick">Searchable archive</li>
                            </ul>
                            <a
                                href=""
                                className=" mt-auto block  bg-primary text-xs py-2 text-center rounded font-normal"
                                title="">
                                Get Started
                            </a>
                        </th>
                        <th
                            scope="col"
                            className="w-1/3 sm:w-1/4 p-4 border border-r-0 border-t-0 flex flex-col">
                            <div className="flex items-center mb-4 flex-wrap sm:no-wrap justify-center sm:justify-start">
                                <p className="u-slab text-3xl">$11</p>
                                <div className="font-normal text-xs  ml-2">
                                    <p>Per user/ month</p>
                                    <p>billed anually</p>
                                </div>
                            </div>
                            <ul className="text-sm font-normal mb-6 hidden sm:block pl-8">
                                <li className="mb-2 tick">
                                    All the features of Basic
                                </li>
                                <li className="mb-2 tick">
                                    Single sign-on (SSO), with SAML
                                </li>
                                <li className="mb-2 tick">Invoicing</li>
                                <li className="mb-2 tick">
                                    Priority customer support
                                </li>
                                <li className="mb-2 tick">99.5% uptime</li>
                            </ul>
                            <a
                                href=""
                                className="mt-auto block  bg-primary text-xs py-2 text-center rounded font-normal"
                                title="">
                                Request a demo
                            </a>
                        </th>
                        <th
                            scope="col"
                            className="w-1/3 sm:w-1/4 p-4 border border-t-0  flex flex-col">
                            <div className="flex items-center mb-4 flex-wrap sm:no-wrap justify-center sm:justify-start">
                                <p className="u-slab text-3xl">$17</p>
                                <div className="font-normal text-xs  ml-2">
                                    <p>Per user/ month</p>
                                    <p>billed anually</p>
                                </div>
                            </div>
                            <ul className="text-sm font-normal mb-6 hidden sm:block pl-8">
                                <li className="mb-2 tick">
                                    Host on your cloud, your own servers, or our
                                    private managed cloud
                                </li>
                                <li className="mb-2 tick">
                                    Single sign-on: AD, SAML
                                </li>
                                <li className="mb-2 tick">
                                    Robust Read and Write API
                                </li>
                                <li className="mb-2 tick">
                                    Dedicated Customer Success & Community
                                    Building
                                </li>
                                <li className="tick">
                                    99.5% uptime SLA & priority support
                                </li>
                            </ul>
                            <a
                                className="mt-auto block  bg-primary text-xs py-2 text-center rounded font-normal"
                                href=""
                                title="">
                                Request a demo
                            </a>
                        </th>
                    </tr>
                    <tr className="flex text-left">
                        <td className="p-4  border border-t-0  min-w-full border-b-0 u-slab text-accent">
                            Support
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0   font-normal flex items-center border-b-0 sm:border-b">
                            Web & email support
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 flex items-center justify-center">
                            Standard support
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 flex items-center justify-center">
                            Priority support
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border flex items-center justify-center text-center">
                            Priority support with dedicated CSM
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4  p-4  border border-r-0  border-t-0 font-normal">
                            Phone & video support
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border border-r-0 border-t-0  font-normal">
                            Dedicated customer success team
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0 font-normal">
                            99.5% uptime SLA
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border  border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4 border border-r-0 border-t-0 font-normal ">
                            Dedicated community development program
                        </th>
                        <td className="w-1/3 sm:w-1/4  p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>

                    <tr className="flex text-left text-sm ">
                        <td className="p-4  border border-t-0  min-w-full border-b-0 u-slab text-accent">
                            Security & Administration
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0   font-normal flex items-center border-b-0 sm:border-b">
                            API
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 flex items-center justify-center">
                            Read
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 flex items-center justify-center">
                            Read / Write
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border flex items-center justify-center text-center">
                            Read / Write
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4  p-4  border border-r-0  border-t-0 font-normal">
                            Analytics
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal">
                            Reporting dashboard
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal">
                            Single-team permissions
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border  border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal ">
                            Multi-team permission
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal ">
                            Single sign-on (SSO)
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0 text-center">
                            SAML
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0 text-center">
                            SAML, AD
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal ">
                            Invoicing
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>

                    <tr className="flex text-left text-sm ">
                        <td className="p-4  border border-t-0  min-w-full border-b-0 u-slab text-accent">
                            Hosting options
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4  p-4  border border-r-0  font-normal border-b-0 sm:border-b">
                            Hosted on stackoverflow.com
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border "></td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal">
                            Our managed cloud
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal">
                            Your cloud
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border  border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal ">
                            Your servers
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>

                    <tr className="flex text-left">
                        <td className="p-4  border border-t-0  min-w-full border-b-0 u-slab text-accent">
                            Customization
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap ">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4  p-4  border border-r-0 border-b-0 sm:border-b font-normal">
                            Logo and colour
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal">
                            Tags
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal">
                            Theme
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border  border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal ">
                            Privileges
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="flex text-left text-sm flex-wrap sm:no-wrap">
                        <th
                            scope="col"
                            className="min-w-full sm:min-w-0 sm:w-1/4 p-4  border border-r-0 border-t-0  font-normal ">
                            User help
                        </th>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-r-0 border-t-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                className="text-info m-auto"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <title id="catTitle">
                                    Relevant package title ( too many to add )
                                </title>
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="flex text-left text-sm">
                        <td className="w-1/4 hidden sm:block p-4  border border-t-0 text-center  border-r-0"></td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0 text-center border-r-0">
                            <a
                                href=""
                                className=" mt-auto block  bg-primary text-xs py-2 text-center rounded font-normal"
                                title="">
                                Get Started
                            </a>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0 text-center border-r-0">
                            <a
                                href=""
                                className=" mt-auto block  bg-primary text-xs py-2 text-center rounded font-normal"
                                title="">
                                Request a demo
                            </a>
                        </td>
                        <td className="w-1/3 sm:w-1/4 p-4  border border-t-0 text-center">
                            <a
                                href=""
                                className=" mt-auto block  bg-primary text-xs py-2 text-center rounded font-normal rounded-bt"
                                title="">
                                Request a demo
                            </a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </section>
    );
};

export default PricingFourAlt;
