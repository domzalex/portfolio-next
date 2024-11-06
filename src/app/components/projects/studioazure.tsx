import Image from "next/image"

import logo from '../../../../public/project-icons/studioazure.png'

const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <Image src={logo} width={75} alt="Studio Azure Logo" className="rounded-lg" />
                    <a href="https://www.studioazure.io" target="_blank" rel="noopener noreferrer" className="underline text-neutral-700 hover:text-blue-500"><h1 className="font-bold text-4xl">Studio Azure</h1></a>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>Design/development agency I co-founded that focuses on graphic design and software development.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    <b>Studio Azure</b> is the design and development agency I founded alongside a graphic designer in Brazil.<br /><br />Our goal in founding <b>Studio Azure</b> is to provide bespoke graphical assets and software products to clients, diligently and obsessively crafted by hand, with <b>performance</b> and <b>simplicity</b> in mind.<br /><br />When it comes to software development in the Internet sphere, we find that many small -- and even some large -- agencies rely on a heavy-handed approach to the tools used to complete a job. <b>Studio Azure</b> aims to use only what is necessary, in an effort to keep the web <b>fast</b> and <b>accessible</b>.<br /><br />We see projects through to completion and are not satisfied until our clients are, end of story.
                </p>
            </div>
        </div>
    )
}

export default Page