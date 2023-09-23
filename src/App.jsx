import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import {CartContainer} from './components/CartContainer'
import {NavBar} from './components/Navbar'
import React from 'react'
import {calculateTotal, getCartItems} from './features/cartSlice'
import {Modal} from './components/Modal'

function App() {
  const {cartItems, isLoading } = useSelector((store)=> store.cart);
  const {isOpen} = useSelector((store)=> store.modal);
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(calculateTotal())
    //dispatch(getCartItems());
  },[cartItems])

  if(isLoading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {isOpen ? <Modal /> : null}
      <NavBar/>
      <CartContainer />
    </main>
  )
}

export default App
