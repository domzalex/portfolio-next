import { useEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"

import aboutImage from '../../../public/feather.png'
import codeImage from '../../../public/code.png'
import blogImage from '../../../public/origami.png'

interface Icon {
    name: string,
    image: StaticImageData
}

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
    }
}

interface Props {
    setWindowsOpen: React.Dispatch<React.SetStateAction<Window[]>>,
    mainHeight: number
}

const DesktopIcons = ({setWindowsOpen, mainHeight}: Props) => {
    const [icons] = useState<Icon[]>([
        {name: 'About', image: aboutImage},
        {name: 'Projects', image: codeImage},
        {name: 'Blog', image: blogImage},
    ])

    return (
        <div className="w-full flex flex-col gap-3 flex-wrap absolute top-0 left-0 p-1">
            {icons.map((icon, index) => {
                return (
                    <div key={index} onClick={() => setWindowsOpen((prev) => [...prev, {name: icon.name, size: {width:850, height: mainHeight}, setSize: {width:720, height: 480}, prevPos: {top: 0, left: 0}, pos: {top: 0, left: 0}}])} className="hover:border-white/40 hover:bg-cyan-600/30 active:border-white/20 active:bg-cyan-700/30 w-1/5 rounded max-w-[85px] border border-transparent flex flex-col items-center justify-center gap-1 py-2">
                        <Image src={icon.image} alt={icon.name} width={50} height={50} className="select-none"/>
                        <p className="select-none text-white text-xs pointer-events-none" style={{ textShadow: '1px 1px 1px #000' }}>{icon.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DesktopIcons