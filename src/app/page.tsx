/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect, useRef, ComponentProps } from "react"
import Background from "./components/background"
import Toolbar from "./components/toolbar"
import DesktopIcons from "./components/desktop_icons"

import WindowsOpen from "./components/windows_open"
import { StaticImageData } from "next/image"

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

const Page = () => {

    const [windowsOpen, setWindowsOpen] = useState<Window[]>([])

    const [isDragging, setIsDragging] = useState<Window | null>(null)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [isResize, setIsResize] = useState<FocusedWindow | null>(null)
    const [height, setHeight] = useState(522)

    const [snapOverlay, setSnapOverlay] = useState<string | null>(null)

    const mainWindowRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (mainWindowRef.current) {
            if (mainWindowRef.current.getBoundingClientRect().width <= 640) {
                setHeight(10000)
            } else setHeight(522)
        }
    }, [])


    // NEED to change how I handle focused window
    const handleMouseDown = (e: React.MouseEvent, window: Window, index: number) => {
        setIsDragging(window)

        const temp = [...windowsOpen]
    
        const selectedWindow = temp.splice(index, 1)[0]
    
        temp.push(selectedWindow)

        setWindowsOpen(temp)
        setIsResize(null)

        setOffset({
            x: e.clientX - window.pos.left,
            y: e.clientY - window.pos.top
        })
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            moveWindow(e)
        } else if (isResize) {
            resizeWindow(e)
        }
    }

    const moveWindow = (e: MouseEvent) => {
        if (!isDragging) return

        const w = mainWindowRef?.current?.getBoundingClientRect().width

        const newPos = {
            left: e.clientX - offset.x,
            top: e.clientY - offset.y
        }

        if (w && e.clientX > (w - 150)) {
            setSnapOverlay('right')
        } else if (w && e.clientX < 150) {
            setSnapOverlay('left')
        } else setSnapOverlay(null)

        setWindowsOpen((prev) => 
            prev.map((win) => win.id === isDragging.id ? { ...win, pos: newPos } : win)
        )
    }

    const resizeWindow = (e: MouseEvent) => {
        let newSize: { width: number; height: number }

        switch (isResize?.direction) {
            case 'ew' :
                newSize = {
                    width: e.clientX - isResize.window.pos.left,
                    height: isResize.window.size.height,
                }
                break
            case 'ns' :
                newSize = {
                    width: isResize.window.size.width,
                    height: e.clientY - isResize.window.pos.top,
                }
                break
            case 'nwse' :
                newSize = {
                    width: e.clientX - isResize.window.pos.left,
                    height: e.clientY - isResize.window.pos.top,
                }
                break
        }
        
        if (isResize) {
            setWindowsOpen((prev) =>
                prev.map((win) =>
                    win.id === isResize.window.id ? { ...win, size: newSize } : win
                )
            )
        }
    }
    
    const handleMouseUp = (e: MouseEvent) => {
        if (isDragging) {
            if (mainWindowRef.current && mainWindowRef.current.getBoundingClientRect().width > 640) {
                const w = mainWindowRef.current.getBoundingClientRect().width
                if (e.clientX > w - 150) {
                    setWindowsOpen((prev) => 
                        prev.map((win) => win.id === isDragging.id ? { ...win, pos: {top: 0, left: w / 2}, size: { width: w / 2, height: 10000 } } : win)
                    )
                } else if (e.clientX < 150) (
                    setWindowsOpen((prev) => 
                        prev.map((win) => win.id === isDragging.id ? { ...win, pos: {top: 0, left: 0}, size: { width: w / 2, height: 10000 } } : win)
                    )
                )
            }
        }
        setIsDragging(null)
        setSnapOverlay(null)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging, isResize, handleMouseMove, resizeWindow, handleMouseUp])

    return (
        <div ref={mainWindowRef} className="flex-1 flex items-center justify-center z-0 bg-black">
            <Background />

            <DesktopIcons windowsOpen={windowsOpen} setWindowsOpen={setWindowsOpen} mainHeight={height} windowRef={mainWindowRef.current} />

            <WindowsOpen windowsOpen={windowsOpen} handleMouseDown={handleMouseDown} setWindowsOpen={setWindowsOpen} offset={offset} isResize={isResize} setIsResize={setIsResize} windowRef={mainWindowRef.current} mainHeight={height} isDragging={isDragging} />

            {snapOverlay == 'right' ? (
                <>
                    <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center p-3 pb-[43px] pointer-events-none opacity-100 transition-all">
                        <div className="border border-neutral-500 rounded-lg bg-cyan-900/25 w-full h-full"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-3 pb-[43px] pointer-events-none opacity-0 transition-all">
                        <div className="border border-neutral-500 rounded-lg bg-cyan-900/25 w-full h-full"></div>
                    </div>
                </>
            ) : snapOverlay == 'left' ? (
                <>
                    <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center p-3 pb-[43px] pointer-events-none opacity-0 transition-all">
                        <div className="border border-neutral-500 rounded-lg bg-cyan-900/25 w-full h-full"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-3 pb-[43px] pointer-events-none opacity-100 transition-all">
                        <div className="border border-neutral-500 rounded-lg bg-cyan-900/25 w-full h-full"></div>
                    </div>
                </>
            ) : (
                <>
                    <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center p-3 pb-[43px] pointer-events-none opacity-0 transition-all">
                        <div className="border border-neutral-500 rounded-lg bg-cyan-900/25 w-full h-full"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-1/2 h-full flex items-center justify-center p-3 pb-[43px] pointer-events-none opacity-0 transition-all">
                        <div className="border border-neutral-500 rounded-lg bg-cyan-900/25 w-full h-full"></div>
                    </div>
                </>
            )}

            <Toolbar windowsOpen={windowsOpen} />
        </div>
    )
}

export default Page
