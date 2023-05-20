import { XMarkIcon } from '@heroicons/react/24/solid'
import { MiContexto } from '../Context'
import { OrderCard } from './OrderCard';

export function CheckoutSideMenu() {
    const { checkoutProductDetail, closeCheckoutItem, cardProducts, setCardProducts } = MiContexto();
    const handleDelete=(id)=>{
        const filterProducts = cardProducts.filter(product=>product.id!=id);
        setCardProducts([...filterProducts]);
    }
    return (
        <aside className={`${checkoutProductDetail ? "flex" : "hidden"} flex-col fixed right-[10px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] p-6 bottom-0`}>
            <div className='flex justify-between items-center'>
                <h2 className="font-medium text-xl">My Order</h2>
                <XMarkIcon className={'w-4 cursor-pointer'} onClick={closeCheckoutItem} />
            </div>
            <div className='px-6 mt-3 overflow-y-scroll'>
                {cardProducts.map(ele => (
                    <OrderCard
                        key={ele.title}
                        title={ele.title}
                        image={ele.image}
                        price={ele.price}
                        id={ele.id}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </aside>
    )
}
