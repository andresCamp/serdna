import SamaraInput from '@/components/SamaraInput'
import Title from '@/components/Title'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center justify-center p-24 gap-8'>

            <Title>Components</Title>
            <div className='grid grid-cols-3 gap-8'>
                <ComponentsItem title='Samara Input' url='/samara-input' type='Input Box' gradient='gradient-to-r from-indigo-500 to-blue-500'>
                    <SamaraInput/>
                </ComponentsItem>
            </div>
        </div>
    )
}

export default page


const ComponentsItem: React.FC<{children: ReactNode, title: string, url: string, type: string, gradient: string}> = ({children, title, url, type, gradient}) => {
    
    return(
        <div className={`flex flex-col items-start justify-between gap-4 size-64 hover:bg-white/10 hover:backdrop-blur-sm hover:ring-2 hover:ring-${gradient} rounded-2xl p-3 transition-all duration-500`}>
            <Badge className={`bg-${gradient}`}>{type}</Badge>
            
            {children}

            <Link href={url} className={`text-xl bg-clip-text hover:text-transparent hover:bg-${gradient}`}>
                {title}  &gt;
            </Link>
        </div>
    )
}