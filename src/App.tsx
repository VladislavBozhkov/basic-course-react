import React from 'react';
import Header from './components/Header';




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
  id : number
  title : string
  price : string
} 

interface WayToTeachProps {
  products : Product[]
}

console.log(products)

const WayToTeach: React.FC<WayToTeachProps> = ({products}) => {
  return(
    
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
    return (
        <div>
            <Header />
            <WayToTeach products={products} />
        </div>
    );
};

export default App;