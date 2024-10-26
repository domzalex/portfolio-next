import { useEffect, useRef } from "react"
import { ThpaceGL } from 'thpace'

const settings = {
    colors: ['#155e75', '#101010', '#047857'],
    triangleSize: 100,
    maxFps: 24,
    pointAnimationSpeed: 25000,
    particleSettings: {
        count: [1, 2],
        opacity: [0.015, 0.5]
    }
}

const mobileSettings = {
    colors: ['#155e75', '#101010', '#047857'],
    triangleSize: 50,
    maxFps: 24,
    pointAnimationSpeed: 25000,
    particleSettings: {
        radius: [0.5, 1],
        count: [1, 2],
        opacity: [0.015, 0.5]
    }
}

const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        canvasRef.current = document.querySelector('#bg')
        if (canvasRef.current) {
            if (canvasRef.current.getBoundingClientRect().width < 640) {
                ThpaceGL.create(canvasRef.current, mobileSettings)
            } else {
                ThpaceGL.create(canvasRef.current, settings)
            }
        }
    }, [])

    return (
        <canvas id="bg" className="w-full h-auto fixed top-0 z-0"></canvas>
    )
}

export default Background