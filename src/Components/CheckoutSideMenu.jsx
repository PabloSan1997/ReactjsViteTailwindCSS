import { XMarkIcon } from '@heroicons/react/24/solid'
import { MiContexto } from '../Context'
import { OrderCard } from './OrderCard';
import { totalPrice } from '../utils';
import { Link } from 'react-router-dom';

export function CheckoutSideMenu() {
    const { checkoutProductDetail, closeCheckoutItem, cardProducts, setCardProducts, setOrder, order } = MiContexto();
    const handleDelete = (id) => {
        const filterProducts = cardProducts.filter(product => product.id != id);
        setCardProducts([...filterProducts]);
    }
    const handleCheckOut = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: cardProducts,
            total: cardProducts.length,
            totalPrice: totalPrice(cardProducts),
            id:Math.random().toString(32).substring(2,7)
        }
        setOrder([...order, orderToAdd]);
        setCardProducts([]);
    }
    return (
        <aside className={`${checkoutProductDetail ? "flex" : "hidden"} flex-col fixed right-[10px] border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] p-6 bottom-0`}>
            <div className='flex justify-between items-center'>
                <h2 className="font-medium text-xl">My Order</h2>
                <XMarkIcon className={'w-4 cursor-pointer'} onClick={closeCheckoutItem} />
            </div>
            <div className='px-6 mt-3 overflow-y-scroll flex-1'>
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
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-ligth'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(cardProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button className='w-full bg-black text-white py-3 rounded-lg' onClick={() => handleCheckOut()}>Check out</button>
                </Link>
            </div>
        </aside>
    )
}
