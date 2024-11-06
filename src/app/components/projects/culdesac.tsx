import Image from "next/image"

import logo from '../../../../public/project-icons/culdesac.png'

const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <Image src={logo} width={75} alt="Cul De Sac Logo" className="rounded-lg" />
                    <a href="https://theculdesac.club" target="_blank" rel="noopener noreferrer" className="underline text-neutral-700 hover:text-blue-500"><h1 className="font-bold text-4xl">The<br />Cul-De-Sac</h1></a>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>First real project built with Next.js. Largely a sandbox for various programming ideas including real-time applications and video games.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    <b>The Cul-De-Sac</b> is my personal blog/coding playground of sorts.<br /><br />Whether I&#39;m writing a blog post, prototyping other applications, or trying my hand at recreating games, it will likely be on <b>The Cul-De-Sac</b>.<br /><br />This project was my first real foray into <b>Next.js</b> and <b>TypeScript</b>.<br /><br />Given that the website is my &#34;coding playground,&#34; it&#39;s where you will find the broadest scope as far as projects go. Some things you will find are a <b>real-time chat room</b>, a <b>flashcard system</b>, a <b>blog system</b> with <b>tag search</b>, a <b>collaborative real-time drawing canvas</b>, as well as several games like a <b>basic Cookie Clicker clone</b>, a <b>Tower Defense Game</b>, and a silly <b>falling object</b> game parodying a friend of mine.<br /><br />Overall, I&#39;m quite proud of this project and continue to iterate, add new features, and test out ideas that come to mind.
                </p>
            </div>
        </div>
    )
}

export default Page