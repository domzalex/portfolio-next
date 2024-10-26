'use client'

import { useState, useEffect, useRef } from "react"
import Background from "./components/background"
import Toolbar from "./components/toolbar"
import DesktopIcons from "./components/desktop_icons"

import WindowsOpen from "./components/windows_open"

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

    const mainWindowRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (mainWindowRef.current) {
            if (mainWindowRef.current.getBoundingClientRect().width <= 640) {
                setHeight(10000)
            } else setHeight(522)
            
        }
    }, [])

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, window: Window, index: number) => {
        setIsDragging(window)

        const temp = [...windowsOpen]
    
        const selectedWindow = temp.splice(index, 1)[0]
    
        temp.push(selectedWindow)

        setWindowsOpen(temp)

        setOffset({
            x: e.clientX - window.pos.left,
            y: e.clientY - window.pos.top
        })
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return

        const newPos = {
            left: e.clientX - offset.x,
            top: e.clientY - offset.y
        }
        setWindowsOpen((prev) => 
            prev.map((win) => win.name === isDragging.name ? { ...win, pos: newPos } : win)
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
                    win.name === isResize.window.name ? { ...win, size: newSize } : win
                )
            )
        }
    }
    
    const handleMouseUp = () => {
        setIsDragging(null)
    }

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)

            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
                window.removeEventListener('mouseup', handleMouseUp)
            }
        }
        else if (isResize) {
            window.addEventListener('mousemove', resizeWindow)
            window.addEventListener('mouseup', handleMouseUp)

            return () => {
                window.removeEventListener('mousemove', resizeWindow)
                window.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [isDragging, isResize])

    return (
        <div ref={mainWindowRef} className="flex-1 flex items-center justify-center z-0 bg-black">
            <Background />

            <DesktopIcons setWindowsOpen={setWindowsOpen} mainHeight={height} />

            <WindowsOpen windowsOpen={windowsOpen} handleMouseDown={handleMouseDown} setWindowsOpen={setWindowsOpen} offset={offset} isResize={isResize} setIsResize={setIsResize} />

            <Toolbar />
        </div>
    )
}

export default Page
