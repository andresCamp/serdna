import React from 'react'
import { Input } from "@/components/ui/input"

const SamaraInput = () => {
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

export default SamaraInput


// const SamaraInput = () => {
//     return (
        
//         <div className='relative group flex items-start flex-col w-48  '>
//             <Input 
//                 placeholder=' '
//                 className='peer w-full h-full text-lg pt-4 pb-2 placeholder-transparent'
//             />
//                     {/* <input type="text" placeholder='test'  className='border rounded-lg px-3 py-5'>
//                     </input>
//                         <span> test</span> */}
//             <label 
//                 className='absolute pointer-events-none left-3 peer-focus-visible:left-3 peer-focus-visible:top-3 text-lg peer-focus-visible:text-xs transition-all duration-200
//                 top-1/2 transform -translate-y-1/2
//             '>First name</label>
//         </div>
        

//     )
// }

// export default SamaraInput


// const SamaraInput = () => {
//     return (
//         <div>
//         {/* <input type="text" placeholder='test'  className='border rounded-lg px-3 py-5'>
//         </input>
//             <span> test</span> */}
            
//         <div className='relative group flex items-start flex-col border-2 border-black p-4 w-48 h-16 rounded-xl '>
//             <span 
//                 className='absolute mx-4 group-hover:mx-3 group-hover:top-4 text-lg group-hover:text-xs transition-all duration-200
//                 top-1/2 transform -translate-x-1/2 -translate-y-1/2
//             '>placeholder</span>
//         </div>
        
//         </div>
//     )
// }

// export default SamaraInput


// find out how to modify input place holder
// change hover state with active state