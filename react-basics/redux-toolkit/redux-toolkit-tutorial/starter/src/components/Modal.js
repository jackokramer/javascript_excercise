import { closeModal } from "../features/modal/modalSlice"
import { useDispatch } from "react-redux"
import { clearCart } from "../features/cart/cartSlice"

const Modal = () => {
    const dispatch= useDispatch()

  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>Remove all items from your shopping Cart?</h4>
            <div className="btn-container">
                <button
                className="btn confirm-btn"
                type="button"
                onClick={()=>{
                    dispatch(clearCart())
                    dispatch(closeModal())
                }}> Confirm</button>
                <button
                type="button"
                className="btn clear-btn"
                onClick={()=>{
                    dispatch(closeModal())
                }}> Cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal