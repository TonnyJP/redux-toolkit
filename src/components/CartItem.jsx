import {useDispatch} from "react-redux"
import {ChevronDown, ChevronUp} from "../icons"
import {removeItem} from "../features/cartSlice"

export const CartItem = ({id, title , price , img ,amount}) => {
    const dispatch = useDispatch()

    return(<article className="cart-item" id={id}>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">${price}</h4>
            <button className="remove-btn" onClick={() => dispatch(removeItem({payload: {id: id}}))}>remove</button>
        </div>
        <div>
            <button className="amount-btn">
                <ChevronUp />
            </button>
            <p>
                {amount}
            </p>
            <button className="amount-btn">
                <ChevronDown />
            </button>
        </div>
    </article>)
}