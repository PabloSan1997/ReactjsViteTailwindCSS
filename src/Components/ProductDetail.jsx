import { XMarkIcon } from '@heroicons/react/24/solid'

export function ProductDetail() {
  return (
    <aside className='flex flex-col fixed right-[10px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]'>
        <div className='flex justify-between items-center p-6'>
            <h2 className="font-medium text-xl">Detail</h2>
            <XMarkIcon className={'w-4'}/>
        </div>
    </aside>
  )
}
