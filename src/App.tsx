import React from 'react';
import Header from './components/Header';




const products: Product[] = [
    {
        title: 'молоко',
        price: '100р'
    },
    {
        title: 'хлеб',
        price: '50р'
    },
    {
        title: 'яйца',
        price: '120р'
    },
    {
        title: 'сыр',
        price: '200р'
    }
];

interface Product {
  title : string
  price : string
} 

interface WayToTeachProps {
  products : Product[]
}

const WayToTeach: React.FC<WayToTeachProps> = ({products}) => {
  return(
    
    <ul>
      {products.map((product) => (
        <li>
          <span> {product.title} - {product.price}</span>
        </li>
      ))}
    </ul>
  )
}


const App: React.FC = () => {
    return (
        <div>
            <Header />
            <WayToTeach products={products} />
        </div>
    );
};

export default App;