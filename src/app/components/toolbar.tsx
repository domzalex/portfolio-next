import Image, { StaticImageData } from "next/image"

import birdStart from '../../../public/bird-start-4.svg'

import Clock from "./clock"

interface Window {
    name: string,
    size: {
        width: number,
        height: number
    },
    setSize: {
        width: number,
        height: number
    },
    prevPos: {
        top: number,
        left: number
    },
    pos: {
        top: number,
        left: number
    },
    icon: StaticImageData
}

interface Props {
    windowsOpen: Window[],
}

const Toolbar = ({ windowsOpen }: Props) => {
    return (
        <div className="w-full h-8 flex items-center justify-between absolute bottom-0 left-0 bg-neutral-950/50 backdrop-blur-sm">
            <div className="px-2 py-1 sm:hover:bg-cyan-900/50 sm:active:bg-cyan-950/50 active:bg-cyan-950/50 hover:bg-cyan-900/00">
                <Image src={birdStart} alt="" />
            </div>
            <div className="openWindows flex items-center justify-center w-3/5 max-w-[1280px] h-full gap-0.5">
                {windowsOpen.map((window, index) => {
                    return (
                        <div key={index} className="text-neutral-200 flex items-center gap-2 flex-1 max-w-[200px] border border-neutral-600 py-[3px] pl-1 hover:bg-teal-900/75 active:bg-teal-950/75">
                            <Image src={window.icon} alt="" width={20} />
                            <h2 className="text-sm truncate">{window.name}</h2>
                        </div>
                    )
                })}
            </div>
            <Clock />
        </div>
    )
}

export default Toolbar