
import { Link } from 'react-router-dom';
import { Layout } from '../Components/Layout'
import { OrdersCard } from '../Components/OrdersCard'
import { MiContexto } from '../Context'
export function MyOrders() {
  const { order } = MiContexto();

  return (
    <Layout>
      <div className='flex items-center jus w-80 relative'>
        <h1 className='font-medium text-xl mb-5'>My orders</h1>
      </div>
      {order.map(elemento => (
        <Link key={elemento.id} to={`/my-orders/${elemento.id}`}>
          <OrdersCard totalPrice={elemento.totalPrice} totalProducts={elemento.total} date={elemento.date} />
        </Link>
      ))}
    </Layout>
  )
}
