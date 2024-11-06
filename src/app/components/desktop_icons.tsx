/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps, useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"

import About from "./about"
import Blog from "./blog"
import Projects from "./projects"

import aboutImage from '../../../public/feather.png'
import codeImage from '../../../public/code.png'
import blogImage from '../../../public/origami.png'
import github from '../../../public/github.png'

import folder from '../../../public/folder.png'
import file from '../../../public/file.png'
import internet from '../../../public/web-link.png'

interface Icon {
    name: string,
    image: StaticImageData,
    icon: StaticImageData,
    component: {
        component: React.ComponentType<any>,
        props: ComponentProps<any>
    }
}

interface Window {
    id: string,
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
    icon: StaticImageData,
    component: {
        component: React.ComponentType<any>,
        props: ComponentProps<any>
    }
}

interface Props {
    windowsOpen: Window[],
    setWindowsOpen: React.Dispatch<React.SetStateAction<Window[]>>,
    mainHeight: number,
    windowRef: HTMLDivElement | null
}

const DesktopIcons = ({windowsOpen, setWindowsOpen, mainHeight, windowRef}: Props) => {
    useEffect(() => {
        setIcons([
            {name: 'About', image: aboutImage, icon: file, component: {component: About, props: null}},
            {name: 'Projects', image: codeImage, icon: folder, component: {component: Projects, props: {setWindowsOpen, windowsOpen, windowRef, mainHeight}}},
            {name: 'Blog', image: blogImage, icon: internet, component: {component: Blog, props: {sentUrl: 'https://theculdesac.club/blog'}}},
        ])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowRef])
    const [icons, setIcons] = useState<Icon[]>([
    ])

    return (
        <div className="w-full flex flex-col gap-3 flex-wrap absolute top-0 left-0 p-1">
            {windowRef ? (
                icons.map((icon, index) => {
                    return (
                        <div key={index} onClick={() => setWindowsOpen((prev) => [...prev, {id: Math.random().toString(36).substr(2,9), name: icon.name, size: {width:850, height: mainHeight}, setSize: {width:720, height: 480}, prevPos: {top: windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (100 + (windowsOpen.length * 40)), left:  windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (250 + (windowsOpen.length * 40))}, pos: {top:  windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (100 + (windowsOpen.length * 40)), left:  windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (250 + (windowsOpen.length * 40))}, icon: icon.icon, component: icon.component}])} className="hover:border-white/40 hover:bg-cyan-600/30 active:border-white/20 active:bg-cyan-700/30 w-1/5 rounded max-w-[85px] border border-transparent flex flex-col items-center justify-center gap-1 py-2">
                            <Image src={icon.image} alt={icon.name} width={50} height={50} className="select-none"/>
                            <p className="select-none text-white text-xs pointer-events-none" style={{ textShadow: '1px 1px 1px #000' }}>{icon.name}</p>
                        </div>
                    )
                })
            ) : (
                <></>
            )}
            <a href="https://github.com/domzalex" target="blank" rel="noopener noreferrer" className="hover:border-white/40 hover:bg-cyan-600/30 active:border-white/20 active:bg-cyan-700/30 w-1/5 rounded max-w-[85px] border border-transparent flex flex-col items-center justify-center gap-1 py-2">
                <Image src={github} alt="github link" width={50} height={50} className="select-none"/>
                <p className="select-none text-white text-xs pointer-events-none" style={{ textShadow: '1px 1px 1px #000' }}>GitHub</p>
            </a>
        </div>
    )
}

export default DesktopIcons