/* eslint-disable react/prop-types */



export function Card({category, title, price, image}) {
   
  return (
    <div className='bg-white cursor-pointer w-56 h-60'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category}</span>
            <img className='w-full h-full object-cover rounded-lg' src={image} alt="headphones" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'>+</div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{title.substring(0,20)}</span>
            <span className='text-sm font-medium'>${price}</span>
        </p>
    </div>
  )
}
