import Image from "next/image"

import logo from '../../../../public/project-icons/bfg.png'

const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <Image src={logo} width={75} alt="BFG Logo" className="rounded-lg" />
                    <a href="https://bfgproductionsatl.com" target="_blank" rel="noopener noreferrer" className="underline text-neutral-700 hover:text-blue-500"><h1 className="font-bold text-4xl">B.F.G. Productions</h1></a>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>First paid/React project. No longer regularly updated, but still maintained. Company website with an admin dashboard.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    This was my very first paid project, and also my first project with <b>React.js</b> back in the fall of 2020. I was contracted by a small entertainment company based out of Atlanta, GA to build their company&#39;s website. They have since expanded into Florida.
                    <br /><br />
                    The tech stack itself is a basic <b>MERN</b> stack, with <b>MongoDB, Express, React,</b> and <b>Node</b>.
                    <br /><br />
                    While I still maintain the website, it has largely remained dormant for a while, with updates being small and infrequent. Previously, the website featured a <b>calendar</b> for all of the regular weekly events as well as one for one-off events for their roster of live performances.
                    <br /><br />
                    To make things easier for the business, I created an <b>admin dashboard</b> that allowed people within the company to <b>create, update,</b> and <b>delete</b> any and all of their events as well as their roster of DJs and live bands.
                    <br /><br />
                    This was an excellent &#34;first paid project,&#34; and even though I now only occasionally do some maintenance, I learned a lot from this experience.
                </p>
            </div>
        </div>
    )
}

export default Page