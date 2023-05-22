/* eslint-disable react/prop-types */

import { XMarkIcon } from '@heroicons/react/24/solid'
export function OrderCard({  title, price, image, id, handleDelete  }) {
  let renderXMarkIcon;
    if(handleDelete){
      renderXMarkIcon =   <XMarkIcon className={'w-4 cursor-pointer'} onClick={()=> handleDelete(id)}/>;
    }
  return (
    <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
            </figure>
            <p className='text-sm font-light'>{title.substring(0, 20)}</p>
        </div>
       <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>{price}</p>
            {renderXMarkIcon}
        </div>
    </div>
  )
}
