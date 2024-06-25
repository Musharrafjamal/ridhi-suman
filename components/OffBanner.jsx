import Image from 'next/image'
import React from 'react'


const OffBanner = () => {
    return (
        <div className='mt-5 p-2'>
            <div className="mt-2 flex flex-col md:flex-row justify-around items-center">
                <div className='flex items-center mb-4 md:mb-0'>
                    <Image src="/icon/ReadyMade.svg" width={50} height={45} />
                    <span className='mx-3 text-center md:text-left'>READY MADE</span>
                </div>
                <div className='hidden md:block h-16 w-[1px] bg-slate-400'></div>
                <div className='flex items-center mb-4 md:mb-0'>
                    <Image src="/icon/BestEverDeals.svg" width={60} height={45} />
                    <span className='mx-3 text-center md:text-left'>BEST EVER DEALS</span>
                </div>
                <div className='hidden md:block h-16 w-[1px] bg-slate-400'></div>
                <div className='flex items-center'>
                    <Image src="/icon/MostTrusted.svg" width={60} height={45} />
                    <span className='mx-3 text-center md:text-left'>MOST TRUSTED</span>
                </div>
            </div>
            <div className="mt-5 md:mt-10 flex flex-col md:flex-row items-center justify-center">
                <div className='flex items-center mb-4 md:mb-0'>
                    <Image src="/icon/LovedByEveryone.svg" width={60} height={60} />
                    <span className='mx-3 text-center md:text-left'>LOVED BY EVERYONE</span>
                </div>
                <div className='hidden md:block h-16 w-[1px] bg-slate-400 mx-20'></div>
                <div className='flex items-center'>
                    <span className='mx-3 text-center md:text-left'>EXPRESS SHIPPING</span>
                    <Image src="/icon/ExpressShipping.svg" width={60} height={45} />
                </div>
            </div>
        </div>
        // <div className='mt-5 p-2'>
        //     <div className="mt-2 grid grid-cols-2 gap-4 md:flex md:flex-row justify-around items-center">
        //         <div className='flex items-center mb-4 md:mb-0'>
        //             <Image src="/icon/ReadyMade.svg" width={50} height={45} />
        //             <span className='mx-3 text-center md:text-left'>READY MADE</span>
        //         </div>
        //         <div className='hidden md:block h-16 w-[1px] bg-slate-400 '></div>
        //         <div className='flex items-center mb-4 md:mb-0'>
        //             <Image src="/icon/BestEverDeals.svg" width={60} height={45} />
        //             <span className='mx-3 text-center md:text-left'>BEST EVER DEALS</span>
        //         </div>
        //         <div className='hidden md:block h-16 w-[1px] bg-slate-400 '></div>
        //         <div className='flex items-center'>
        //             <Image src="/icon/MostTrusted.svg" width={60} height={45} />
        //             <span className='mx-3 text-center md:text-left'>MOST TRUSTED</span>
        //         </div>
        //     </div>
        //     <div className="mt-5 md:mt-10 grid grid-cols-2 gap-4 md:flex md:flex-row items-center justify-center">
        //         <div className='flex items-center mb-4 md:mb-0'>
        //             <Image src="/icon/LovedByEveryone.svg" width={60} height={60} />
        //             <span className='mx-3 text-center md:text-left'>LOVED BY EVERYONE</span>
        //         </div>
        //         <div className='hidden md:block h-16 w-[1px] bg-slate-400 mx-20'></div>

        //         <div className='flex items-center'>
        //             <span className='mx-3 text-center md:text-left'>EXPRESS SHIPPING</span>
        //             <Image src="/icon/ExpressShipping.svg" width={60} height={45} />
        //         </div>
        //     </div>
        // </div>


    )
}

export default OffBanner