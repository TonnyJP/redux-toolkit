import {useDispatch} from "react-redux"
import {ChevronDown, ChevronUp} from "../icons"
import {removeItem, increaseItem, decreaseItem} from "../features/cartSlice"

export const CartItem = ({id, title , price , img ,amount}) => {
    const dispatch = useDispatch();

    const decrease = () =>{
        if(amount ===1 ){
            dispatch(removeItem(id))
        }if(amount > 1){
            dispatch(decreaseItem(id))
        }
    }

    return(<article className="cart-item" id={id}>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick = {() => dispatch(increaseItem(id))}>
                <ChevronUp />
            </button>
            <p>
                {amount}
            </p>
            <button className="amount-btn" onClick={decrease}>
                <ChevronDown />
            </button>
        </div>
    </article>)
}