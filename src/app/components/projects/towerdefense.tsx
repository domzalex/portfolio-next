import Image from "next/image"

import logo from '../../../../public/project-icons/luis.webp'

const Page = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <div className="flex items-center gap-6 mb-8">
                    <Image src={logo} width={75} alt="Tower Defense Logo" className="rounded-lg" />
                    <a href="https://theculdesac.club/games/culdesac-defense" target="_blank" rel="noopener noreferrer" className="underline text-neutral-700 hover:text-blue-500"><h1 className="font-bold text-4xl">Cul-De-Sac Defense</h1></a>
                </div>
                <p className="text-neutral-700 pb-6">
                    <b>TL;DR<br /></b>Tower Defense game hosted on The Cul-De-Sac, made with Next.js, based around myself and my friends.
                    <br /><br />
                    <div className="w-full h-[1px] bg-neutral-600"></div>
                    <br />
                    I've always enjoyed a good <b>tower defense</b> game.
                    <br /><br />
                    A friend of mine was recently whinging in the group chat about how bored he'd been at work due to the lack of work for him to do. He went on to mention that he had been playing a lot of <b>Bloons TD6</b>, which lead to a discussion about me creating a tower defense game that featured all of us in the group chat as "towers."
                    <br /><br />
                    That now leads to today, where I've spent free time on and off for a few weeks creating my own tower defense game for myself and my friends. 
                    <br /><br />
                    I created the tower assets based off of joke-like edits of pictures of us, and I made the maps based off of a tileset created by <a className="hover:underline text-blue-500" href="https://zaebucca.itch.io/adventure-begins" target="_blank"><b>Zaebucca</b></a> on Itch.io.
                    <br /><br />
                    Given this game is featured on <a className="hover:underline text-blue-500" href="https://theculdesac.club" target="_blank"><b>The Cul-De-Sac</b></a>, it is made with <b>Next.js</b>.
                    <br /><br />
                    There are more things I want to do with this game, like having the towers <b>fire projectiles</b> that collide with the enemies, rather than the current "attack the first enemy that is within the collision zone," and also create proper <b>enemy tiers</b>. Currently, I used ChatGPT to create the "waves" of enemies with a few parameters. It gets the job done, but that was more of a quick means to an end.
                    <br /><br />
                    I'm likely shelving the project for now. Trying to implement a projectile collision for each tower has been a nightmare. Something about React that I've yet to figure out a nice way of handling in applications such as this is the <b>asynchronous state updates</b>. I need to spend my time elsewhere for the time being, so updates to the game might be minimal and infrequent.
                </p>
            </div>
        </div>
    )
}

export default Page