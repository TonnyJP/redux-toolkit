import {useSelector, useDispatch} from "react-redux"
import {CartItem} from "./CartItem"
import { clearCart } from "../features/cartSlice"

export const CartContainer = () => {
    const dispatch = useDispatch()

    const { amount, total, cartItems} = useSelector((store) => store.cart)
    if(amount === 0){
        return <section className="cart">
            <header>
                <h2>Your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }

    return(<section className="cart">
        <header>
            <h2>Your bag</h2>
        </header>
        <section>
            {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.id} {...cartItem} />
            })}
        </section>
        <footer>
            <hr/>
            <div className="cart-total">
                <h4>total <span>${total}</span></h4>
            </div>
            <button className="btn clear-btn" onClick={() =>dispatch(clearCart())}>clear cart</button>
        </footer>
    </section>)
}