import { useEffect, useState } from 'react'
import { Layout } from '../Components/Layout'
import { Card } from '../Components/Card'
import { ProductDetail } from '../Components/ProductDetail';
const urlApi ="https://fakestoreapi.com/products";
export function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(urlApi).then(data => data.json()).then(json => setItems(json));
  }, []);
  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items.map(elemento => (<Card key={elemento.id} {...elemento} />))}
      </div>
      <ProductDetail/>
    </Layout>
  )
}
