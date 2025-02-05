import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import './App.css'




const products: Product[] = [
  {
    id: 1,
    title: 'молоко',
    price: '100р'
  },
  {
    id: 2,
    title: 'хлеб',
    price: '50р'
  },
  {
    id: 3,
    title: 'яйца',
    price: '120р'
  },
  {
    id: 4,
    title: 'сыр',
    price: '200р'
  }
];

interface Product {
  id: number
  title: string
  price: string
}

interface WayToTeachProps {
  products: Product[]
}

console.log(products)

const WayToTeach: React.FC<WayToTeachProps> = ({ products }) => {
  return (

    <ul>
      {products.map((product) => (

        <li key={product.id}>
          <span> {product.title} - {product.price}</span>
        </li>
      ))}
    </ul>
  )
}




const App: React.FC = () => {

  let [count, setCount] = useState(0)
  
  
  
  function increment() {
    setCount(
      count = count + 1
    )
  }
  
  function dicrement() {
    setCount(
      count = count - 1
    )
  }

  return (
    <div>
      <Header />
      <WayToTeach products={products} />
      <h3>{count}</h3>
      <Button onChange={increment} text={'увеличить'} />
      <Button onChange={dicrement} text={'уменьшить'} />
    </div>
  );
};

export default App;