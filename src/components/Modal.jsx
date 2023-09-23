import {useDispatch} from "react-redux"
import {clearCart} from "../features/cartSlice";
import {closeModal} from "../features/modalSlice";

export const Modal = () => {
    const dispatch = useDispatch();

    const onConfirmedClicked = () => {
        dispatch(clearCart())
        dispatch(closeModal())
    }
    
    return (<aside className="modal-container">
        <div className="modal">
            <h4>Remove all items from your shopping cart?</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" onClick={onConfirmedClicked}> Confirm</button>
                <button className="btn clear-btn" onClick={() => dispatch(closeModal())}> cancel</button>
            </div>
        </div>
    </aside>)
}