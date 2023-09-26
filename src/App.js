
import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import { useState } from 'react';
import CartList from './Components/CartList';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?cs=srgb&dl=pexels-alex-azabache-3766111.jpg&fm=jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?cs=srgb&dl=pexels-craig-dennis-205421.jpg&fm=jpg',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://media.istockphoto.com/id/1126642401/photo/power-bank-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=FMMhXxZql2guHigJvPDsi6S5Bp_QT6OsfZnD6kqcc3U=',
      name: 'Power Bank',
      category: 'Mobile Accessories',
      seller: 'Nokia',
      price: 1500
    },
    {
      url: 'https://m.media-amazon.com/images/I/61JEbzmJi4L.jpg',
      name: 'Trimmer',
      category: 'menGrooming',
      seller: 'Nova',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
    {
      url: 'https://img.tatacliq.com/images/i11/1348Wx2000H/MP000000000006526_1348Wx2000H_202306091236391.jpeg',
      name: 'Pen Drive',
      category: 'Storage',
      seller: 'SandDisk',
      price: 399
    },
    {
      url: 'https://media.istockphoto.com/id/149027826/photo/isolated-pink-yoga-mat-slightly-unrolled.jpg?s=612x612&w=0&k=20&c=UWIAobquPuXspDPWEUvF19nJ90NihlcSMDHFW3XlqYc=',
      name: 'Yoga Mat',
      category: 'Fitness',
      seller: 'BodyFit',
      price: 150
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;
