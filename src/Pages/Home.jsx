import { Layout } from '../Components/Layout'
import { Card } from '../Components/Card'
import { ProductDetail } from '../Components/ProductDetail';
import { MiContexto } from '../Context';

export function Home() {
  const {items} = MiContexto();
  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items.map(elemento => (<Card key={elemento.id} {...elemento} />))}
      </div>
      <ProductDetail/>
    </Layout>
  )
}
