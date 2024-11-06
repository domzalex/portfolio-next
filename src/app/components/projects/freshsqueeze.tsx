import Image from "next/image"

import logo from '../../../../public/project-icons/freshsqueeze.png'

const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <Image src={logo} width={75} alt="Fresh Squeeze Cleaner Logo" className="rounded-lg" />
                    <a href="https://freshsqueezecleaner.com" target="_blank" rel="noopener noreferrer" className="underline text-neutral-700 hover:text-blue-500"><h1 className="font-bold text-3xl sm:text-4xl">Fresh Squeeze Cleaner</h1></a>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>First client for <b>Studio Azure</b>. Minimal website needs called for a lightweight, fast, and minimal tech stack: <b>HTMX/Go</b>.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    This was the first client that <b>Studio Azure</b> did work for.
                    <br /><br />
                    The client's needs were simple. They needed a landing page for their cleaning business that didn't <i>"look like every other site."</i>
                    <br /><br />
                    We went with a minimalist color block style, with a soft typeface and pastel colors. The client wanted potential customers to be able to submit an inquiry directly on the website.
                    <br /><br />
                    Instead of using a robust set of technologies, we chose a more trimmed down approach using <b>HTMX</b> and <b>Go</b>. This minimal tech stack accomplishes everythin we needed and was easily setup and deployed.
                </p>
            </div>
        </div>
    )
}

export default Page