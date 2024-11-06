const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <h1 className="font-bold text-4xl">Enterprise Software Suite</h1>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>Enterprise software suite I am working on with a small start-up on a contract basis.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    A larger project that is currently in the works is a semi-large suite of software tools meant to aid the <b>service industry</b> as a whole.
                    <br /><br />
                    The suite of tools includes a <b>payment processing</b> system, a <b>highly-optimized service routing</b> system, an <b>inventory management</b> system, as well as a <b>client management</b> system.
                    <br /><br />
                    This project is currently utilizing a hybrid <b>PHP</b> and <b>Next.js</b> technology stack, but will eventually migrate to a full <b>Next.js</b> stack that is containerized with <b>Docker</b> and hosted by <b>AWS</b>.
                    <br /><br />
                    My role in this project is acting as a core developer mostly on the front-end of the <b>Next.js</b> side of things, and I have been working very closely with a senior developer and a project lead. We are working on month-long sprints with a simple <b>CI/CD pipeline</b> in the development environment, and will continue to do so in staging and production.
                    <br /><br />
                    <i>Given that this project is not a personal project or not one that I have sole responsibility over, the codebase is private and therefore I cannot share a link. However, I am happy to discuss in more detail to any interested parties.</i>
                </p>
            </div>
        </div>
    )
}

export default Page