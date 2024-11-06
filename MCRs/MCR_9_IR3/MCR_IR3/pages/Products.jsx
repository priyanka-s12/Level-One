import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Description of Smartphone',
      price: 500,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'Description of Laptop',
      price: 1200,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Description of Headphones',
      price: 100,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 4,
      name: 'Tablet',
      description: 'Description of Tablet',
      price: 300,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 5,
      name: 'Camera',
      description: 'Description of Camera',
      price: 800,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 6,
      name: 'Monitor',
      description: 'Description of Monitor',
      price: 600,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 7,
      name: 'Smartwatch',
      description: 'Description of Smartwatch',
      price: 250,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 8,
      name: 'Printer',
      description: 'Description of Printer',
      price: 350,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 9,
      name: 'Speaker System',
      description: 'Description of Speaker System',
      price: 400,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
    {
      id: 10,
      name: 'Wireless Router',
      description: 'Description of Wireless Router',
      price: 80,
      productImg1: 'https://placehold.co/200x200?text=Image+1',
      productImg2: 'https://placehold.co/200x200?text=Image+2',
      productImg3: 'https://placehold.co/200x200?text=Image+3',
    },
  ];

  const displayData = products.map((product) => (
    <li key={product.id} className="list-group-item">
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </li>
  ));

  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="mb-3">Product List</h2>
        <ul className="list-group mb-3">{displayData}</ul>
      </main>
      <Footer />
    </>
  );
};

export default Products;
