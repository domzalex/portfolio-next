/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from 'next/image'
import { ComponentProps, useState } from 'react'

import file from '../../../public/file.png'

import culdesac from '../components/projects/culdesac'
import studioazure from '../components/projects/studioazure'
import enterprise from '../components/projects/enterprise'
import bfg from '../components/projects/bfg'
import towerdefense from '../components/projects/towerdefense'
import freshsqueeze from '../components/projects/freshsqueeze'
import flashcard from '../components/projects/flashcard'
import omnitool from '../components/projects/omnitool'
import rpg from '../components/projects/rpg'

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
    setWindowsOpen: React.Dispatch<React.SetStateAction<Window[]>>,
    windowsOpen: Window[],
    windowRef: HTMLDivElement | null,
    mainHeight: number
}

const Projects = ({ setWindowsOpen, windowsOpen, windowRef, mainHeight }: Props) => {

    const [projects] = useState([
        {name: 'The Cul-De-Sac', type: 'Web Application', component: {component: culdesac, props: null}},
        {name: 'Studio Azure', type: 'Design/Development Agency', component: {component: studioazure, props: null}},
        {name: 'Enterprise Software Suite', type: 'Web Software Suite', component: {component: enterprise, props: null}},
        {name: 'B.F.G. Productions', type: 'Business Website', component: {component: bfg, props: null}},
        {name: 'Tower Defense Game', type: 'Video Game', component: {component: towerdefense, props: null}},
        {name: 'Fresh Squeeze Cleaner', type: 'Business Website', component: {component: freshsqueeze, props: null}},
        {name: 'Flashcard App', type: 'Mobile Application', component: {component: flashcard, props: null}},
        {name: 'Omnitool.io', type: 'Web Application', component: {component: omnitool, props: null}},
        {name: '2D Role-Playing Game', type: 'Video Game', component: {component: rpg, props: null}}
    ])

    const addToWindows = (project: {
        component: {
            component: React.ComponentType<any>,
            props: ComponentProps<any>
        }, name: string, type: string
    }) => {
        const newWindow = {id: Math.random().toString(36).substr(2,9), name: project.name, size: {width:850, height: mainHeight}, setSize: {width:720, height: 480}, prevPos: {top: windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (100 + (windowsOpen.length * 40)), left:  windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (250 + (windowsOpen.length * 40))}, pos: {top:  windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (100 + (windowsOpen.length * 40)), left:  windowRef && windowRef.getBoundingClientRect().width <= 640 ? 0 : (250 + (windowsOpen.length * 40))}, icon: file, component: project.component}
        setWindowsOpen((prev) => [...prev, newWindow])
    }

    return (
        <div className='flex flex-col w-full overflow-scroll'>
            <div className='w-full flex bg-neutral-900'>
                <h1 className='text-sm text-neutral-200 w-1/4 min-w-[225px] p-2 cursor-default'>Name</h1>
                <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] cursor-default p-2 pl-2 border-l border-neutral-600'>Type</h2>
            </div>
            {projects.map((project, index) => {
                return (
                    <div key={index} onClick={() => addToWindows(project)}>
                        <div className='w-full flex items-center hover:bg-neutral-700 select-none'>
                            <div className='flex w-1/4 min-w-[225px] px-2 py-2 sm:py-1 gap-2'>
                                <Image src={file} width={20} alt='file icon' />
                                <h1 className='font-bold text-sm text-neutral-200 min-w-[200px] cursor-default'>{project.name}</h1>
                            </div>
                            <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] pl-2 cursor-default whitespace-nowrap truncate'>{project.type}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects