import { Layout } from '../Components/Layout'
import { Card } from '../Components/Card'
import { ProductDetail } from '../Components/ProductDetail';
import { MiContexto } from '../Context';
import { useParams } from 'react-router-dom';

export function CategoryItem() {
  const {items} = MiContexto();
  const {category} = useParams();
  const CategoryItems = items.filter(elemento=>elemento.category==category)
  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {CategoryItems.map(elemento => (<Card key={elemento.id} {...elemento} />))}
      </div>
      <ProductDetail/>
    </Layout>
  )
}
