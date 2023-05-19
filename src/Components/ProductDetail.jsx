import { XMarkIcon } from '@heroicons/react/24/solid'
import { MiContexto } from '../Context'

export function ProductDetail() {
  const {productDetailOpen, productToShow, closeProductItem} = MiContexto();
  const { category, title, price, image } = productToShow;
  return (
    <aside className={`${productDetailOpen?"flex":"hidden"} flex-col fixed right-[10px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] p-6`}>
        <div className='flex justify-between items-center'>
            <h2 className="font-medium text-xl">Detail</h2>
            <XMarkIcon className={'w-4 cursor-pointer'} onClick={closeProductItem}/>
        </div>
        <figure className='px-6 max-h-[70%]'>
          <img className='w-full h-full rounded-lg' src={image} alt={title} />
        </figure>
        <p className='flex flex-col'>
          <span className='font-medium text-2xl'>Price: ${price}</span>
          <span className='font-medium text-md'>Name: {title}</span>
          <span className='font-light text-2xl'>Category: {category}</span>
        </p>
    </aside>
  )
}
