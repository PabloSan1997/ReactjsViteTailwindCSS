/* eslint-disable react/prop-types */

export function OrdersCard({ totalPrice, totalProducts, date }) {
    
    return (
        <div className='flex justify-between items-center border border-black w-80 p-4 rounded-xl mb-4 hover:bg-slate-300'>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col'>
                    <span className='font-light'>{date}</span>
                    <span>{totalProducts} articles</span>
                </div>
                <span className='font-medium text-2xl'>${totalPrice}</span>
            </div>
        </div>
    )
}
