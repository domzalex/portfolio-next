import Image from "next/image"
import alexImage from '../../../public/about-alex.webp'

const About = () => {
    return (
        <div className="w-full h-full flex justify-center overflow-y-scroll bg-neutral-200">
            <div className="h-full p-6 max-w-[900px]">
                <Image src={alexImage} width={200} alt="image of Alex Domzalski" className="float-left mr-6 mb-6 sm:mb-3 rounded-lg" />
                <h1 className="text-neutral-700 font-bold text-5xl mb-8">Hello!</h1>
                <p className="text-neutral-700 pb-6">My name is <b>Alex Domzalski</b>. I am a web developer, musician, and bird enthusiast.<br /><br />I've been a freelance full-stack developer for roughly four years now, and building fun websites is something very dear to me. The tech stack I've found myself gravitating towards most has been <b>React</b>, <b>Next.js</b>, <b>Node</b>, <b>MongoDB</b>, and <b>Tailwind</b>. Other technologies I've been messing around with have been <b>HTMX/Golang</b> and <b>React Native/SQLite</b>.<br></br><br></br>When not building websites, I am a touring and session bassist who regularly performs with and records for bluegrass artist Canon Tyler. You can find information about live performances and new releases on his <a className="hover:underline text-blue-500" href="https://www.instagram.com/canontylermusic/" target="_blank"><b>Instagram</b></a>.<br /><br />If you'd like to discuss work, tech, music, birds, or if you want recommendations for <i>excellent places to visit in Tokyo or northern Japan</i>, please don't hesitate to <a className="hover:underline text-blue-500" href="mailto:hello@alexdomzalski.com"><b>send me an email</b></a>!</p>
            </div>
        </div>
    )
}

export default About