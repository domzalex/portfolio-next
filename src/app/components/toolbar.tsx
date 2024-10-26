import Image from "next/image"

import birdStart from '../../../public/bird-start-4.svg'

import Clock from "./clock"

const Toolbar = () => {
    return (
        <div className="w-full h-8 flex items-center justify-between absolute bottom-0 left-0 bg-neutral-950/50 backdrop-blur-sm">
            <div className="px-2 py-1 sm:hover:bg-cyan-900/50 sm:active:bg-cyan-950/50 active:bg-cyan-950/50 hover:bg-cyan-900/00">
                <Image src={birdStart} alt="" />
            </div>
            <Clock />
        </div>
    )
}

export default Toolbar