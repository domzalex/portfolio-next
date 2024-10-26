import { useEffect, useState, useRef } from "react"

interface Props {
    sentUrl: string
}

const Blog = ({sentUrl}: Props) => {

    const [url, setUrl] = useState<string | null>(null)
    const [tempUrl, setTempUrl] = useState<string>('')

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (sentUrl) {
            setUrl(sentUrl)
            setTempUrl(sentUrl)
        }
    }, [sentUrl])

    const submitNewUrl = (e: React.KeyboardEvent) => {
        if (e.code === 'Enter') {
            setUrl(tempUrl)
        }
    }



    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-center py-2 bg-neutral-800 border-b border-neutral-700">
                <input ref={inputRef} type="text" name="url" id="" className="w-2/3 max-w-[800px] rounded bg-neutral-700 px-2 py-1 text-neutral-400" value={tempUrl} onChange={(e) => setTempUrl(e.target.value)} onKeyDown={(e) => submitNewUrl(e)}/>
            </div>
            {url ? (
                <iframe src={url} className="w-full h-full"></iframe>
            ) : (<></>)}
        </div>
    )
}

export default Blog