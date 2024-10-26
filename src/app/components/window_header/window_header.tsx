import Image from "next/image"

import CloseIcon from '../../../../public/close.png'

interface Props {
    name: string,
    setWindowsOpen: React.Dispatch<React.SetStateAction<Window[]>>
}

interface Window {
    name: string,
    size: {
        width: number,
        height: number
    },
    pos: {
        top: number,
        left: number
    }
}

const WindowHeader = ( props: Props ) => {
    return (
        <div className="w-full h-8 bg-black/75 flex items-center justify-between">
            <p className="font-bold text-white text-sm ml-2 select-none cursor-default">{props.name}</p>
            <div className="h-full px-4 flex items-center justify-center sm:hover:bg-red-700 sm:active:bg-red-800 active:bg-red-800" onClick={() => props.setWindowsOpen((prev) => prev.filter(win => win.name != props.name))}>
                <Image src={CloseIcon} width={16} height={16} style={{ filter: 'invert(1)', }} alt="close icon" />
            </div>
        </div>
    )
}

export default WindowHeader