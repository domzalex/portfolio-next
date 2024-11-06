/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from "next/image"

import CloseIcon from '../../../public/close.png'
import { ComponentProps } from "react"

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

interface FocusedWindow {
    window: Window,
    direction: string
}

interface Props {
    windowsOpen: Window[],
    handleMouseDown: (e: React.MouseEvent, window: Window, index: number) => void,
    setWindowsOpen: React.Dispatch<React.SetStateAction<Window[]>>,
    offset: {x: number, y: number},
    isResize: FocusedWindow | null,
    setIsResize: React.Dispatch<React.SetStateAction<FocusedWindow | null>>,
    windowRef: HTMLDivElement | null,
    mainHeight: number,
    isDragging: Window | null,
}

const WindowsOpen = ({windowsOpen, handleMouseDown, setWindowsOpen, setIsResize, isDragging, isResize}: Props) => {

    const setFocusedWindow = (index: number) => {
        const temp = [...windowsOpen]
        
        const selectedWindow = temp.splice(index, 1)[0]
    
        temp.push(selectedWindow)
    
        setWindowsOpen(temp)
    }
    const maximizeWindow = (window: Window, index: number) => {
        setIsResize(null)
        setFocusedWindow(index)

        if (window.size.height != 10000) {
            const prevPosRef = window.pos
            const prevSize = window.size
            setWindowsOpen((prev) => prev.map((win) => win.id === window.id ? { ...win, pos: {left: 0, top: 0}, prevPos: prevPosRef, size: {width: 10000, height: 10000}, setSize: prevSize } : win))
        } else {
            setWindowsOpen((prev) => prev.map((win) => win.id === window.id ? { ...win, pos: window.prevPos, size: window.setSize } : win))
        }
    }

    return (
        <>
            {windowsOpen.map((window, index) => {
                return (
                    <div key={index} style={{ position: 'fixed', maxWidth: `${window.size.width}px`, maxHeight: window.size.height == 10000 ? `calc(100% - 32px)` : `${window.size.height}px`, top: `${window.pos.top}px`, left: `${window.pos.left}px`, transition: (!isDragging && !isResize) ? 'all 300ms' : 'none', transformOrigin: 'center' }} className="min-h-[125px] min-w-[200px] select-none w-full h-full bg-neutral-800 relative flex flex-col border border-black shadow-2xl">
                        <div className="w-full h-8 flex">
                            <div onMouseDown={(e) => {handleMouseDown(e, window, index)}} className="flex-1 h-8 bg-black/75 flex items-center pl-2  border-b border-black">
                                <Image src={window.icon} width={20} alt='icon' />
                                <p className="font-bold text-white text-sm ml-2 select-none cursor-default">{window.name}</p>
                            </div>
                            <div className="h-full flex items-center border-b border-black">
                                <div className="h-full px-4 flex items-center justify-center bg-black/75 sm:hover:bg-teal-800 sm:active:bg-teal-900 active:bg-teal-900" onClick={() => maximizeWindow(window, index)}>
                                    <div className="h-4 aspect-square border"></div>
                                </div>
                                <div className="h-full px-4 flex items-center justify-center bg-black/75 sm:hover:bg-red-700 sm:active:bg-red-800 active:bg-red-800" onClick={() => {setIsResize({window: window, direction: 'ns'}); setWindowsOpen((prev) => prev.filter(win => win.id != window.id))}}>
                                    <Image src={CloseIcon} width={16} height={16} style={{ filter: 'invert(1)' }} alt="close icon" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center" style={{ height: `calc(100% - 32px)` }}>
                            <div className="absolute -bottom-2 left-0 h-4 bg-red-400/00 cursor-ns-resize"
                                style={{ width: `calc(100% - 10px)` }}
                                onMouseDown={() => setIsResize({window: window, direction: 'ns'})}
                                onMouseUp={() => setIsResize(null)}
                            ></div>
                            <div className="absolute top-0 -right-2 w-4 bg-red-400/00 cursor-ew-resize"
                                style={{ height: `calc(100% - 10px)` }}
                                onMouseDown={() => setIsResize({window: window, direction: 'ew'})}
                                onMouseUp={() => setIsResize(null)}
                            ></div>
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-400/00 cursor-nwse-resize"
                                onMouseDown={() => setIsResize({window: window, direction: 'nwse'})}
                                onMouseUp={() => setIsResize(null)}
                            ></div>

                            <window.component.component {...window.component.props}/>

                            {/* {window.name == 'Blog' ? (
                                <Blog sentUrl='https://theculdesac.club/blog' />
                            ) : window.name == 'Projects' ? (
                                <Projects setWindowsOpen={setWindowsOpen} windowsOpen={windowsOpen} windowRef={windowRef} mainHeight={mainHeight} />
                            ) : window.name == 'About' ? (
                                <About />
                            ) : (
                                <div className='flex flex-col w-full overflow-scroll'>
                                    <div className='w-full flex bg-neutral-900'>
                                        <h1 className='text-sm text-neutral-200 w-1/4 min-w-[225px] p-2 cursor-default'>Name</h1>
                                        <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] cursor-default p-2 pl-2 border-l border-neutral-600'>Type</h2>
                                    </div>
                                </div>
                            )} */}

                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default WindowsOpen