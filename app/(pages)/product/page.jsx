"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductPage = () => {
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    return (
        <div className='flex flex-col md:flex-row my-5'>
            {/* Start Pic Part */}
            <div className='flex w-full md:w-[45%] flex-col px-2 md:px-10'>
                <div className='mb-5 flex justify-center'>
                    <Image src="/image/image.png" width={493} height={677} className='w-full h-auto' />
                </div>
                <div className='flex items-center justify-center md:justify-start'>
                    <Image src="/image/Image1.png" width={149} height={249} className='w-1/3 md:w-auto' />
                    <Image src="/image/Image2.png" width={149} height={249} className='w-1/3 md:w-auto mx-2 md:mx-6' />
                    <Image src="/image/Image3.png" width={149} height={249} className='w-1/3 md:w-auto' />
                </div>
            </div>
            {/* End Pic Part */}
            {/* Text part */}
            <div className='w-full md:w-[55%] flex flex-col gap-6 px-2 md:px-0'>
                <div className='flex flex-col gap-3'>
                    <div className='w-[90px] bg-pink-400 text-[#52057B] inline text-[12px] font-400 px-2 py-[6px] leading-3 rounded'>Lehnga Choli</div>
                    <div className='font-600 text-[20px] md:text-[32px] leading-8 md:leading-12'>Faux Georgette Lavender Party Wear Sequence Embroidery Work Readymade Lehenga Choli</div>
                    <div className='font-600 leading-9 md:leading-[43.57px] text-2xl md:text-4xl text-[#11998E]'><span>&#x20B9;</span> 2599.10</div>
                    <div className='font-400 text-[14px] md:text-[16px] leading-5 md:leading-6 text-[#828282]'>We provide a <span className='font-600 text-black'>one-year warranty</span> in case there are any issues with our products.</div>
                </div>

                {/* Start Choose color and size button box */}
                <div>
                    {/* Choose Color */}
                    <div className='flex flex-col md:flex-row items-center justify-between h-auto md:h-[69px] py-5 border-y border-slate-300'>
                        <div className='text-[#828282] font-400 text-[14px] leading-4'>Choose Color</div>
                        <div className='flex flex-wrap items-center gap-2 mt-3 md:mt-0'>
                            {['Black', 'Gray', 'White', 'Red'].map((color) => (
                                <div
                                    key={color}
                                    className={`productPageColorButton ${selectedColor === color ? 'selected' : ''}`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div className='flex flex-col md:flex-row items-center justify-between h-auto md:h-[69px] py-5 border-b border-slate-300'>
                        <div className='text-[#828282] font-400 text-[14px] leading-4'>Size</div>
                        <div className='flex flex-wrap items-center gap-2 mt-3 md:mt-0'>
                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                <div
                                    key={size}
                                    className={`productPageSizeButton ${selectedSize === size ? 'selected' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* End Choose color and size button box */}

                {/* Buy and Cart Button */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 h-auto md:h-[52px]'>
                    <button className='Buy-CartButton bg-[#52057B] text-white w-full md:w-auto mb-3 md:mb-0'>Buy Now</button>
                    <div className='Buy-CartButton border border-black flex items-center justify-center gap-2 hover:cursor-pointer w-full md:w-auto'>
                        <Image src="/icon/cartIcon.svg" width={17} height={16} />
                        <button>Add to Cart</button>
                    </div>
                </div>
                {/* End Buy and Cart Button */}

                {/* Start product Feature Icon */}
                <div className="grid grid-cols-2 gap-4 pb-5 border-b">
                    <div className='flex items-center gap-3'>
                        <Image src="icon/StoreProduct.svg" width={18} height={22} />
                        <span>Original store product</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src="icon/Waranty.svg" width={18} height={22} />
                        <span>Long Term Warranty</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src="icon/TrustedShop.svg" width={18} height={22} />
                        <span>100% trusted shop</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src="icon/Lovable.svg" width={18} height={22} />
                        <span>Most Lovable</span>
                    </div>
                </div>
                {/* End product Feature Icon */}

                {/* Start Social Media Icon */}
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
                    <div className='flex items-center gap-2'>
                        <span className='font-400 text-md leading-5'>Share</span>
                        <div className='bg-[#1877F2] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Facebook.svg" width={17} height={17} />
                        </div>
                        <div className='bg-[#1D9BF0] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Twiter.svg" width={17} height={17} />
                        </div>
                        <div className='bg-[#5BD366] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/WhatsApp.svg" width={17} height={17} />
                        </div>
                        <div className='bg-[#E34574] rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Instagram.svg" width={17} height={17} />
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>Add to Favorite</span>
                        <div className='rounded-full w-[25px] h-[25px] flex items-center justify-center hover:cursor-pointer'>
                            <Image src="/icon/Favorite.svg" width={17} height={17} />
                        </div>
                    </div>
                </div>
                {/* End Social Media Icon */}
            </div>
        </div>

    )
}

export default ProductPage