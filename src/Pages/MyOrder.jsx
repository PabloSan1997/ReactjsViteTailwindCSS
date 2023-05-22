
import { Layout } from '../Components/Layout'
import { MiContexto } from '../Context'
import { OrderCard } from '../Components/OrderCard';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export  function MyOrder() {
  const {order} = MiContexto();
  const {id} = useParams();
  let orderShow;
  if(!id){
   orderShow = order.slice(-1)[0];
  }else{
    const filtrar = order.filter(elemento=> elemento.id==id);
    orderShow = filtrar.length!==0?filtrar[0]:undefined;
  }
  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-6'>
        <Link to="/my-orders" className='absolute left-0'>
          <ChevronLeftIcon className={'w-4 cursor-pointer'} />
        </Link>
        <h1 className='font-medium text-xl'>My orders</h1>
      </div>
      <div className='flex flex-col w-80'>
                {orderShow?.products.map(ele => (
                    <OrderCard
                        key={ele.title}
                        title={ele.title}
                        image={ele.image}
                        price={ele.price}
                        id={ele.id}
                    />
                ))}
            </div>
    </Layout>
  )
}
