import DisplayBox from '@/components/DisplayBox'
import SamaraInput from '@/components/SamaraInput'
import Title from '@/components/Title'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col gap-16 h-screen items-center justify-start p-24 '>


            <Title>Samara Input</Title>


            <DisplayBox code={samaraInputCode}>
                <SamaraInput/>
            </DisplayBox>
                    

            
        </div>
    )
}

export default page

const samaraInputCode = `const SamaraInput = () => {
    return (
        <div className='relative group flex items-start flex-col w-full'>
            <Input 
                placeholder='Phone number'
                className='
                    peer w-full h-full text-lg pt-7 pb-2 rounded-lg dark:text-white
                    focus-visible:ring-[#0096F7] focus-visible:border-0 focus-visible:ring-offset-0 dark:border-[#313131] 
                    bg-[#F8F8F2] dark:bg-[#1A1A1A] placeholder:text-transparent focus-visible:bg-white dark:focus-visible:bg-black
                '/>
            
            <label className='
                absolute transform -translate-y-1/2 left-3 transition-all duration-200 pointer-events-none text-[#9E9E9A] dark:text-[#888888]
                peer-placeholder-shown:text-lg peer-focus-visible:text-sm text-sm
                peer-placeholder-shown:top-1/2 peer-focus-visible:top-4 top-4
            '>
                Phone number
            </label>
        </div>
    )
}

export default SamaraInput;`;


