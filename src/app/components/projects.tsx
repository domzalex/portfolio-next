import Image from 'next/image'
import { useState } from 'react'

import folder from '../../../public/folder.png'
import file from '../../../public/file.png'

const Projects = () => {

    const [folderOpen, setFolderOpen] = useState<string | null>(null)
    const [paidProjects] = useState([
        {name: 'B.F.G. Productions', type: 'Text document'},
        {name: 'Fresh Squeeze Cleaner', type: 'Text document'},
        {name: '[REDACTED] Software', type: 'Text document'},
    ])
    const [personalProjects] = useState([
        {name: 'The Cul-De-Sac', type: 'Text document'},
        {name: 'Omnitool.io', type: 'Text document'},
        {name: 'Tower Defense Game', type: 'Text document'},
        {name: '2D Role-Playing Game', type: 'Text document'},
        {name: 'Flashcard App', type: 'Text document'},
    ])

    return (
        <div className='flex flex-col w-full overflow-scroll'>
            <div className='w-full flex bg-neutral-900'>
                <h1 className='text-sm text-neutral-200 w-1/4 min-w-[225px] p-2 cursor-default'>Name</h1>
                <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] cursor-default p-2 pl-2 border-l border-neutral-600'>Type</h2>
            </div>
            {!folderOpen ? (
                <div className='flex flex-col w-full'>
                    <div className='w-full flex items-center hover:bg-neutral-700 select-none' onClick={() => setFolderOpen('paid')}>
                        <div className='flex w-1/4 min-w-[225px] px-2 py-2 sm:py-1 gap-2'>
                            <Image src={folder} width={20} alt='folder icon' />
                            <h1 className='font-bold text-sm text-neutral-200 cursor-default'>Paid Projects</h1>
                        </div>
                        <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] pl-2 cursor-default whitespace-nowrap'>File Folder</h2>
                    </div>
                    <div className='w-full flex items-center hover:bg-neutral-700 select-none' onClick={() => setFolderOpen('personal')}>
                        <div className='flex w-1/4 min-w-[225px] px-2 py-2 sm:py-1 gap-2'>
                            <Image src={folder} width={20} alt='folder icon' />
                            <h1 className='font-bold text-sm text-neutral-200 cursor-default'>Personal Projects</h1>
                        </div>
                        <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] pl-2 cursor-default whitespace-nowrap'>File Folder</h2>
                    </div>
                </div>
            ) : folderOpen == 'paid' ? (
                <div>
                    {paidProjects.map((project, index) => {
                        return (
                            <div key={index}>
                                <div className='w-full flex items-center hover:bg-neutral-700 select-none'>
                                    <div className='flex w-1/4 min-w-[225px] px-2 py-2 sm:py-1 gap-2'>
                                        <Image src={file} width={20} alt='file icon' />
                                        <h1 className='font-bold text-sm text-neutral-200 min-w-[200px] cursor-default'>{project.name}</h1>
                                    </div>
                                    <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] pl-2 cursor-default whitespace-nowrap'>{project.type}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : folderOpen == 'personal' ? (
                <div>
                    {personalProjects.map((project, index) => {
                        return (
                            <div key={index}>
                                <div className='w-full flex items-center hover:bg-neutral-700 select-none'>
                                    <div className='flex w-1/4 min-w-[225px] px-2 py-2 sm:py-1 gap-2'>
                                        <Image src={file} width={20} alt='file icon' />
                                        <h1 className='font-bold text-sm text-neutral-200 min-w-[200px] cursor-default'>{project.name}</h1>
                                    </div>
                                    <h2 className='text-sm text-neutral-200 w-1/4 min-w-[100px] pl-2 cursor-default whitespace-nowrap'>{project.type}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : <></>}
        </div>
    )
}

export default Projects